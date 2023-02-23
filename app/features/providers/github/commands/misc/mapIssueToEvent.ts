import pkg from 'date-fns-tz'
import type { Maybe } from '~/types'
import type { Issue, EventStatus, Attendee, Event } from '../types'
import type { ParsedIssue } from '@zentered/issue-forms-body-parser'

const { zonedTimeToUtc } = pkg
const timeZone = 'Europe/Nicosia'

const getIssueStatus = (isUpcoming: boolean, issue: Issue): EventStatus => {
  if (!isUpcoming) {
    return issue.state
  }

  if (issue.state === 'OPEN') {
    return 'CONFIRMED'
  }
  return 'CANCELLED'
}

export const mapIssueToEvent = async (issue: Issue): Promise<Maybe<Event>> => {
  const { default: issueBodyParser } = await import(
    '@zentered/issue-forms-body-parser/src/parse.js'
  )

  const parsedBody: ParsedIssue = await issueBodyParser(issue.body)
  const isParsedBody = parsedBody && Object.keys(parsedBody).length > 0
  if (!isParsedBody) {
    return undefined
  }

  const startTime = parsedBody.time
  const startDate = parsedBody.date
  const duration = parsedBody.duration?.duration
  const content = parsedBody['event-description']

  const attendees = issue.reactions.nodes.map((attendee): Attendee => {
    return {
      name:
        attendee.user.name?.length > 0
          ? attendee.user.name
          : attendee.user.login,
      rsvp: true,
      partstat: 'ACCEPTED',
      dir: attendee.user.url
    }
  })

  const zonedDateTime = `${startDate.date}T${startTime.time}`

  const utcDate = zonedTimeToUtc(zonedDateTime, timeZone).toJSON()
  const isUpcoming = new Date(utcDate).valueOf() > Date.now()

  return {
    type: isUpcoming ? 'upcoming' : 'past',
    id: issue.number,
    start: utcDate,
    date: startDate.date,
    time: startTime.time,
    duration: duration,
    title: issue.title,
    datetime: utcDate,
    description: content.text,
    url: issue.url,
    status: getIssueStatus(isUpcoming, issue),
    categories: issue.labels.nodes.map((l) => l.name),
    // @ts-ignore
    organizer: issue.author?.name ?? issue.author.login,
    // organizer: calcIsUser(issue.author) ? issue.author : undefined,
    location: parsedBody.location.text,
    attendees
  }
}
