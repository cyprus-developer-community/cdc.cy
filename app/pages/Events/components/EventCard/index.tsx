import type { Event } from '~/types'
import { Link } from '@remix-run/react'
import { format } from 'date-fns'
import { LabelsList } from '../LabelsList'
import { Avatar, Show, H2 } from '~/features/components'

type EventCardProps = {
  event: Event
}

const formatDate = (date: string) => format(new Date(date), 'do MMMM yyyy')

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <li
      data-test-e2e="event-card"
      className="grid gap-2 shadow-lg rounded-lg relative bg-no-repeat bg-contain bg-center"
      style={{ backgroundImage: "url('/cdc-logo.svg')" }}
    >
      <div className="grid gap-2 px-4 py-4 bg-[rgba(255,255,255,0.9)]">
        <div className="flex items-center justify-between gap-8 mb-1">
          <H2 className="text-xl lg:text-xl text-primary-700">
            <Link to={`/events/${event.id}`} className="outline-link">
              {event.title}
            </Link>
          </H2>
          <Show show={Boolean(event.organizer)}>
            <Avatar
              name={event?.organizer.login}
              src={event?.organizer.avatarUrl}
            />
          </Show>
        </div>
        <p className="italic text-xs text-secondary-500">
          Published on {formatDate(event.publishedAt)}
        </p>
        <LabelsList labels={event.labels} />
      </div>
    </li>
  )
}
