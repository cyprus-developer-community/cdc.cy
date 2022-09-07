import { createAppAuth } from '@octokit/auth-app'
import { graphql } from '@octokit/graphql'
import {
  format,
  add,
  sub,
  isSameDay,
  isSameMonth,
  startOfMonth
} from 'date-fns'
import pkg from 'date-fns-tz'
const { zonedTimeToUtc } = pkg

function calculateDays(events) {
  function compareDateStrings(a, b) {
    const aDate = a.split('T')[0]
    return aDate === b
  }

  const days = []
  const today = new Date()
  let slider = sub(startOfMonth(today), { days: 5 })
  for (let idx = 0; idx < 40; idx++) {
    const currentday = {
      date: format(slider, 'yyyy-MM-dd')
    }

    if (isSameDay(slider, today)) {
      currentday.isToday = true
    }

    if (isSameMonth(slider, today)) {
      currentday.isCurrentMonth = true
    }

    days.push(currentday)
    slider = add(slider, { days: 1 })
  }

  for (const event of events) {
    const found = days.findIndex((d) => compareDateStrings(event.start, d.date))
    if (found > 0) {
      days[found].hasEvent = true
      days[found].eventTitle = event.title
    }
  }

  return days
}

export default async function getEvents() {
  const timeZone = 'Europe/Nicosia'
  const { default: bodyParser } = await import(
    '@zentered/issue-forms-body-parser/src/parse.js'
  )

  const auth = createAppAuth({
    appId: parseInt(process.env.GH_APP_ID),
    privateKey: atob(process.env.GH_PRIVATE_KEY),
    installationId: process.env.GH_APP_INSTALLATION_ID
  })

  const graphqlWithAuth = graphql.defaults({
    request: {
      hook: auth.hook
    }
  })

  const locationsFile = await fetch(
    'https://raw.githubusercontent.com/cyprus-developer-community/events/main/locations.json'
  )
  const locations = await locationsFile.json()

  const response = await graphqlWithAuth(
    `
      query lastIssues($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          issues(
            filterBy: {labels: "Approved :white_check_mark:"}
            orderBy: {field: CREATED_AT, direction: ASC}
            first: 100
          ) {
            edges {
              node {
                id
                url
                title
                body
                createdAt
                updatedAt
                state
                labels(first:10) {
                  nodes {
                    name
                  }
                }
                author {
                  ... on User {
                    login
                    name
                    url
                  }
                }
                reactions(first: 100, content: THUMBS_UP) {
                  edges {
                    node {
                      user {
                        name
                        login
                        url
                      }
                    }
                  }
                }
              }
            }
            totalCount
          }
        }
      }
    `,
    {
      owner: 'cyprus-developer-community',
      repo: 'events'
    }
  )

  const events = []
  let idx = 0
  for (const edge of response.repository.issues.edges) {
    const issue = edge.node
    const parsedBody = await bodyParser(issue.body)

    if (parsedBody && Object.keys(parsedBody).length > 0) {
      const startTime = parsedBody.time
      const startDate = parsedBody.date
      const duration = parsedBody.duration?.duration
      const content = parsedBody['event-description']
      const location = parsedBody.location

      if (startDate && startDate.date && startTime.time) {
        const zonedDateTime = `${startDate.date}T${startTime.time}`

        const utcDate = zonedTimeToUtc(zonedDateTime, timeZone).toJSON()

        const organizer =
          issue.author.name && issue.author.name.length > 0
            ? issue.author.name
            : issue.author?.login

        const event = {
          id: idx++,
          start: utcDate,
          date: startDate.date,
          time: startTime.time,
          duration: duration,
          title: issue.title,
          datetime: utcDate,
          description: content.text,
          url: issue.url,
          state: issue.state,
          categories: issue.labels.nodes.map((l) => l.name),
          organizer: { name: organizer },
          attendees: issue.reactions.edges.map((r) => {
            return {
              name:
                r.node.user.name?.length > 0
                  ? r.node.user.name
                  : r.node.user.login,
              rsvp: true,
              partstat: 'ACCEPTED',
              dir: r.node.user.url
            }
          })
        }

        if (locations && locations.length > 0) {
          const locationLookup = locations.find((l) => l.id === location.id)
          if (!locationLookup) {
            event.location = location.text
          } else {
            event.location = locationLookup.name
            if (locationLookup.geo) {
              const [lat, lon] = locationLookup.geo
              event.geo = { lat, lon }
            }
          }
        } else {
          event.location = location.text
        }

        events.push(event)
      }
    }
  }

  const days = calculateDays(events)

  const sorted = events.sort((a, b) => new Date(a.start) - new Date(b.start))
  const upcoming = sorted
    .filter((e) => new Date(e.start) > new Date())
    .map((e) => {
      e.status = e.state === 'OPEN' ? 'CONFIRMED' : 'CANCELLED'
      return e
    })
  const past = sorted.filter((e) => new Date(e.start) < new Date())

  return {
    upcoming,
    past,
    days
  }
}

/** 
 * these are for cloudflare workers without using the github libraries
async function getAccessToken(context) {
  const appInstallationId = parseInt(context.GH_APP_INSTALLATION_ID)

  // authenticate the github app
  const auth = await createAppAuth({
    appId: parseInt(context.GH_APP_ID),
    privateKey: atob(context.GH_PRIVATE_KEY),
    installationId: appInstallationId
  })
  const appAuthentication = await auth({ type: 'app' })

  // fetch an access token for the installation
  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${appAuthentication.token}`,
    'User-Agent': 'Remix-Run'
  })
  const tokenRequest = await fetch(
    `https://api.github.com/app/installations/${appInstallationId}/access_tokens`,
    { method: 'POST', headers: headers }
  )
  const accessToken = await tokenRequest.json()

  return accessToken.token
}

export async function getEvents(context) {
  const accessToken = await getAccessToken(context)

  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'User-Agent': 'Remix-Run'
  })
  const res = await fetch(
    'https://api.github.com/repos/cyprus-developer-community/events/issues',
    {
      headers: headers
    }
  )
  const events = await res.json()
  console.log(bodyParser)
  console.log(bodyParser())
  const testing = await bodyParser(events[0])
  console.log(testing)
  return events.map((e) => {
    return e
  })
}
 */
