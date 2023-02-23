import type { GetAllEventsQuery } from '../graphql/types'
import type { DurationValue } from '@zentered/issue-forms-body-parser'

export type Issue = GetAllEventsQuery['repository']['issues']['nodes']['0']

export type User = {
  id: string
  login: string
  name?: string
  url: string
  avatarUrl: string
}

export type Attendee = {
  name: string
  rsvp: true
  partstat: 'ACCEPTED'
  dir: string
}

export type EventStatus = 'OPEN' | 'CLOSED' | 'CONFIRMED' | 'CANCELLED'
export type EventLocation = string | { lat: number; lon: number }

export type Event = {
  type: 'upcoming' | 'past'
  id: number
  start: string
  date: string
  time: string
  duration: DurationValue['duration']
  title: string
  datetime: string
  description: string
  url: string
  status: EventStatus
  categories: string[]
  // categories: issue.labels.nodes.map((l) => l.name),
  organizer: string
  //   organizer?: User
  location: string
  attendees: Attendee[]
}

type Coordinates = [number, number]

export type Location = {
  id: string
  name: string
  city?: string
  link?: String
  what3words?: string
  geo?: Coordinates
}

export type Day = {
  date: string
  isToday: boolean
  isCurrentMonth: boolean
  isSelected: boolean
  hasEvent?: boolean
  eventTitle?: string
}
