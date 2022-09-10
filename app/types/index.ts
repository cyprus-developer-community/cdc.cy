import type getEvents from '~/utils/github.server'
export type Nullable<TData = unknown> = TData | null
export type Maybe<TData = unknown> = TData | undefined

export type ID = string
type EventStatus = 'CANCELLED'

export type Event = {
  id: ID
  title: string
  imageUrl: string
  status: EventStatus
  time: string
  datetime: string
  date: string
  location: string
  url: string
}

export type Group = {
  id: string
  logo: string
  name: string
  excerpt: string
  slug: string
  href: string
}

export type GetEventsResult = Awaited<ReturnType<typeof getEvents>>
export type Day = GetEventsResult['days']['0']
