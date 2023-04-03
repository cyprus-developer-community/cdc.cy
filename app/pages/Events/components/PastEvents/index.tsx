import { useAsyncValue } from '@remix-run/react'
import { Section, H2 } from '~/features/components'
import { EventList } from '../EventList'
import type { LoaderData } from '../../loader'

export const PastEvents = () => {
  const res = useAsyncValue() as Awaited<LoaderData['pastEventsPromise']>

  if (res.success === false) {
    return null
  }

  return (
    <Section data-test-e2e="past-events-section">
      <H2>Past events</H2>
      <EventList events={res.data} />
    </Section>
  )
}
