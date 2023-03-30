import { useAsyncValue } from '@remix-run/react'
import { Section, H2 } from '~/features/components'
import { EventList } from '../EventList'
import type { LoaderData } from '../../loader'

export const UpcomingEvents = () => {
  const res = useAsyncValue() as Awaited<LoaderData['upcomingEventsPromise']>

  if (res.success === false) {
    return null
  }

  return (
    <Section data-test-e2e="upcoming-events-section">
      <H2>Upcoming events</H2>
      <EventList events={res.data} />
    </Section>
  )
}
