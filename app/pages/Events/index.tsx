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
import { PastEvents } from './components/PastEvents'
import { UpcomingEvents } from './components/UpcomingEvents'
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
            <UpcomingEvents />
          </Await>
          <Await resolve={pastEventsPromise}>
            <PastEvents />
          </Await>
        </Suspense>
      </div>
    </Page>
  )
}

export default Events
