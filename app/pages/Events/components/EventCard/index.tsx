import type { Event } from '~/types'
import { Link } from '@remix-run/react'
import { Tag } from '~/features/components'
import { format } from 'date-fns'

type EventCardProps = {
  event: Event
}

const formatDate = (date: string) => format(new Date(date), 'do MMMM yyyy')

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <li className="grid gap-2 shadow-lg rounded-lg relative">
      <h2 className="text-lg text-primary-700 bg-primary-400 text-white rounded-t-lg px-2 py-1">
        <Link
          to={`/events/${event.number}`}
          className="focus:outline-none before:absolute before:inset-0 before:content-empty before:outline-3 before:outline-secondary-100 before:outline before:rounded-lg hover:before:outline-primary-400 focus:before:outline-primary-400 hover:before:cursor-pointer"
        >
          {event.title}
        </Link>
      </h2>
      <div className="grid gap-2 px-4 py-4">
        <p className="italic text-secondary-700">
          Published on {formatDate(event.publishedAt)}
        </p>
        <p className="mb-1 text-secondary-600 italic">
          By {event.author.login}
        </p>
        <ul className="flex gap-2">
          {event.labels.nodes.map((label) => {
            const isEventProposal = /event proposal/.test(label.description)
            if (isEventProposal) {
              return null
            }

            return (
              <Tag key={label.name} color={label.color}>
                {label.description}
              </Tag>
            )
          })}
        </ul>
      </div>
    </li>
  )
}
