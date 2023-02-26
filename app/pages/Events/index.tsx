import { useLoaderData } from '@remix-run/react'
import type { LoaderData } from './loader'
import {
  BreacrumbItem,
  Breadcrumbs,
  BreadcrumbLink,
  H1,
  H2,
  Section,
  Page
} from '~/features/components'
import { EventList } from './components/EventList'

const Events = () => {
  const { pastEvents, upcomingEvents } = useLoaderData() as LoaderData

  return (
    <Page>
      <Breadcrumbs>
        <BreacrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem isCurrentPage>
          <BreadcrumbLink to="/events">Events</BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <H1>Events</H1>
      <div className="grid gap-12 lg:gap-24">
        <Section data-test-e2e="upcoming-events-section">
          <H2>Upcoming events</H2>
          <EventList events={upcomingEvents} />
        </Section>
        <Section data-test-e2e="past-events-section">
          <H2>Past events</H2>
          <EventList events={pastEvents} />
        </Section>
      </div>
    </Page>
  )
}

export default Events
