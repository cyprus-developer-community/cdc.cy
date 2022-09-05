export type Nullable<TData = unknown> = TData | null
export type Maybe<TData = unknown> = TData | undefined
export type Day = {
  isSelected: boolean
  isToday: boolean
  isCurrentMonth: boolean
  date: string
  hasEvent: boolean
}

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
}
