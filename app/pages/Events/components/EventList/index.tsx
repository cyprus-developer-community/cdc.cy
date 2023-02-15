import { EventCard } from '../EventCard'
import type { Event } from '~/types'

type EventListProps = {
  events: Event[]
}

export const EventList = ({ events }: EventListProps) => {
  return (
    <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />
      })}
    </ul>
  )
}
