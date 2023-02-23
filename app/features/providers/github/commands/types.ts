import type { GetAllEventsQuery } from '../graphql/types'
import type { DurationValue } from '@zentered/issue-forms-body-parser'

export type Issue = GetAllEventsQuery['getPastEvents']['issues']['nodes']['0']

export type User = {
  id: string
  login: string
  name?: string
  url: string
  avatarUrl: string
}

export type EventStatus = 'OPEN' | 'CLOSED' | 'CONFIRMED' | 'CANCELLED'
export type EventLocation = string | { lat: number; lon: number }
export type EventLabel = {
  name: string
  color: string
  description: string
}

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
  labels: EventLabel[]
  organizer?: User
  location: string
  attendees: User[]
  publishedAt: string
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
