// @ts-nocheck
import {
  format,
  add,
  sub,
  isSameDay,
  isSameMonth,
  startOfMonth
} from 'date-fns'
import getAllEventsQuery from '~/features/providers/github/graphql/queries/getAllEvents.graphql'
import { getLocations } from './getLocations'
import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'

import pkg from 'date-fns-tz'
const { zonedTimeToUtc } = pkg

function calculateDays(events) {
  function compareDateStrings(a, b) {
    const aDate = a.split('T')[0]
    return aDate === b
  }

  const days = []
  const today = new Date()
  // TODO: seems there's an issue with 31/30 days
  let slider = sub(startOfMonth(today), { days: 6 })
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

export async function getAllEvents() {
  const timeZone = 'Europe/Nicosia'
  const { default: bodyParser } = await import(
    '@zentered/issue-forms-body-parser/src/parse.js'
  )

  const client = newGraphQLClientFactory()

  const getLocationsResult = await getLocations()
  if (getLocationsResult.success === false) {
    const { message } = getLocationsResult
    throw new Error(message)
  }

  const locations = getLocationsResult.data
  const response = await client(getAllEventsQuery, {
    owner: 'cyprus-developer-community',
    repo: 'events'
  })

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
