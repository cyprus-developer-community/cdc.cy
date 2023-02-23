import pkg from 'date-fns-tz'
import type { Maybe } from '~/types'
import type { Issue, EventStatus, Event } from '../types'
import { calcIsUser } from './calcIsUser'
import { tryParseDescription } from './tryParseDescription'
import { mapToAttendees } from './mapToAttendees'
import { calcIsIBodyParsed } from './calcIsBodyParsed'

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
  try {
    const { default: issueBodyParser } = await import(
      '@zentered/issue-forms-body-parser/src/parse.js'
    )

    const parsedBody = await issueBodyParser(issue.body)
    if (!calcIsIBodyParsed(parsedBody)) {
      // eslint-disable-next-line no-console
      console.warn(`Ignoring issue '${issue.title}' because is empty body`)
      return undefined
    }

    const startTime = parsedBody.time
    const startDate = parsedBody.date
    const duration = parsedBody.duration?.duration
    const content = parsedBody['event-description']

    const labels = issue.labels.nodes.map(({ name, color, description }) => ({
      name,
      description,
      color
    }))

    const attendees = mapToAttendees(issue.participants, issue.reactions)

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
      description: tryParseDescription(content.text),
      url: issue.url,
      status: getIssueStatus(isUpcoming, issue),
      labels,
      location: parsedBody.location.text,
      publishedAt: issue.publishedAt ?? issue.createdAt,
      organizer: calcIsUser(issue.author) ? issue.author : undefined,
      attendees
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`Issue '${issue.title} failed': ${String(e)}`)
    return undefined
  }
}

export const mapIssuesToEvents = async (issues: Issue[]): Promise<Event[]> => {
  const events = await Promise.all(issues.map(mapIssueToEvent))
  return events.filter(Boolean)
}
