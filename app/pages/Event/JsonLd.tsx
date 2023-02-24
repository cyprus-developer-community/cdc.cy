import { jsonLdScriptProps } from 'react-schemaorg'
import type * as Schema from 'schema-dts'
import type { Event } from '~/types'
import { formatISODuration, add, formatISO, parseISO } from 'date-fns'

export type JsonLdProps = {
  event: Event
}

export const JsonLd = ({ event }: JsonLdProps) => {
  return (
    <script
      async
      referrerPolicy="same-origin"
      {...jsonLdScriptProps<Schema.Event>({
        '@context': 'https://schema.org',
        '@type': 'Event',
        about: {
          '@type': 'Thing',
          name: event.title,
          description: event.description,
          url: event.url
        },
        organizer: {
          '@type': 'Person',
          name: event.organizer.login,
          image: event.organizer.avatarUrl,
          url: event.organizer.url
        },
        location: event.location,
        attendees: event.attendees.map((attendee) => ({
          '@type': 'Person',
          name: attendee.login,
          image: attendee.avatarUrl,
          url: attendee.url
        })),
        eventStatus: {
          '@type': 'EventStatusType',
          name: event.status
        },
        startDate: formatISO(parseISO(event.start)),
        endDate: formatISO(
          add(parseISO(event.start), {
            hours: event.duration.hours,
            minutes: event.duration.minutes
          })
        ),
        duration: formatISODuration({
          hours: event.duration.hours,
          minutes: event.duration.minutes
        }),
        attendee: {
          '@type': 'Person'
        }
      })}
    />
  )
}
