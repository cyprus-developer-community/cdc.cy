import type { Event, Label } from '~/types'
import { Link } from '@remix-run/react'
import { format } from 'date-fns'
import { LabelsList } from '../LabelsList'
import { Avatar } from '~/features/components'

type EventCardProps = {
  event: Event
}

const formatDate = (date: string) => format(new Date(date), 'do MMMM yyyy')

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <li
      className="grid gap-2 shadow-lg rounded-lg relative bg-no-repeat bg-contain bg-center"
      style={{ backgroundImage: "url('/cdc-logo.svg')" }}
    >
      <div className="grid gap-2 px-4 py-4 bg-[rgba(255,255,255,0.9)]">
        <div className="flex items-center justify-between gap-8 mb-1">
          <h2 className="text-lg text-primary-700 rounded-t-lg py-1">
            <Link
              to={`/events/${event.number}`}
              className="focus:outline-none before:absolute before:inset-0 before:content-empty before:outline-3 before:outline-secondary-100 before:outline before:rounded-lg hover:before:outline-primary-400 focus:before:outline-primary-400 hover:before:cursor-pointer"
            >
              {event.title}
            </Link>
          </h2>
          <Avatar name={event.author.login} src={event.author.avatarUrl} />
        </div>
        <p className="italic text-xs text-secondary-500">
          Published on {formatDate(event.publishedAt)}
        </p>
        <LabelsList labels={event.labels.nodes as Label[]} />
      </div>
    </li>
  )
}
