import pkg from 'date-fns-tz'
import type { Maybe } from '~/types'
import type { Issue, EventStatus, Event, User } from '../types'
import type { ParsedIssue } from '@zentered/issue-forms-body-parser'
import { calcIsUser } from './calcIsUser'

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

const getAttendees = (
  participants: Issue['participants'],
  reactions: Issue['reactions']
): User[] => {
  const unfilteredAttendees = [
    ...reactions.nodes.map(({ user }): User => user),
    ...participants.nodes
  ]
  return Object.values(
    unfilteredAttendees.reduce(
      (attendees, user) => ({ ...attendees, [user.login]: user }),
      {} as Record<string, User>
    )
  )
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

  const labels = issue.labels.nodes.map(({ name, color, description }) => ({
    name,
    description,
    color
  }))

  const attendees = getAttendees(issue.participants, issue.reactions)

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
    labels,
    location: parsedBody.location.text,
    publishedAt: issue.publishedAt ?? issue.createdAt,
    organizer: calcIsUser(issue.author) ? issue.author : undefined,
    attendees
  }
}

export const mapIssuesToEvents = async (issues: Issue[]): Promise<Event[]> => {
  const events = await Promise.all(issues.map(mapIssueToEvent))
  return events.filter(Boolean)
}
