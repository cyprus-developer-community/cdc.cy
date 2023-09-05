import { useLoaderData, Await } from '@remix-run/react'
import type { LoaderData } from './loader'
import {
  BreacrumbItem,
  Breadcrumbs,
  BreadcrumbLink,
  H1,
  Page,
  Spinner
} from '~/features/components'
import { Suspense } from 'react'
import { Section, H2 } from '~/features/components'
import { EventList } from './components/EventList'
import { CatchErrorBoundary } from '~/features/components'

const Events = () => {
  const { upcomingEventsPromise, pastEventsPromise } =
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
        <Section data-test-e2e="upcoming-events-section">
          <H2>Upcoming events</H2>
          <Suspense fallback={<Spinner className="mx-auto" />}>
            <CatchErrorBoundary>
              <Await resolve={upcomingEventsPromise}>
                {(res) => {
                  if (res.success === false) {
                    throw new Error(res.message)
                  }
                  return <EventList events={res.data} />
                }}
              </Await>
            </CatchErrorBoundary>
          </Suspense>
        </Section>
        <Section data-test-e2e="past-events-section">
          <H2>Past events</H2>
          <Suspense fallback={<Spinner className="mx-auto" />}>
            <CatchErrorBoundary>
              <Await resolve={pastEventsPromise}>
                {(res) => {
                  if (res.success === false) {
                    throw new Error(res.message)
                  }
                  return <EventList events={res.data} />
                }}
              </Await>
            </CatchErrorBoundary>
          </Suspense>
        </Section>
      </div>
    </Page>
  )
}

export default Events
