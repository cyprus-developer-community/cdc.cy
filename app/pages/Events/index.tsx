import { useLoaderData, Await } from '@remix-run/react'
import type { LoaderData } from './loader'
import {
  BreacrumbItem,
  Breadcrumbs,
  BreadcrumbLink,
  H1,
  H2,
  Section,
  Page,
  Spinner
} from '~/features/components'
import { EventList } from './components/EventList'
import { Suspense } from 'react'

const Events = () => {
  const { pastEventsPromise, upcomingEventsPromise } =
    useLoaderData() as LoaderData

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
        <Suspense fallback={<Spinner className="m-auto" />}>
          <Await resolve={upcomingEventsPromise}>
            {(res) => {
              if (res.success === false) {
                return null
              }
              return (
                <Section data-test-e2e="upcoming-events-section">
                  <H2>Upcoming events</H2>
                  <EventList events={res.data} />
                </Section>
              )
            }}
          </Await>
          <Await resolve={pastEventsPromise}>
            {(res) => {
              if (res.success === false) {
                return null
              }

              return (
                <Section data-test-e2e="past-events-section">
                  <H2>Past events</H2>
                  <EventList events={res.data} />
                </Section>
              )
            }}
          </Await>
        </Suspense>
      </div>
    </Page>
  )
}

export default Events
