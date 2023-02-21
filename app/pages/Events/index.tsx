import { useLoaderData } from '@remix-run/react'
import type { LoaderData } from './loader'
import {
  BreacrumbItem,
  Breadcrumbs,
  BreadcrumbLink
} from '~/features/components/Breadcrumbs'
import { EventList } from './components/EventList'

const Events = () => {
  const { pastEvents, upcomingEvents } = useLoaderData() as LoaderData

  return (
    <article className="page">
      <Breadcrumbs>
        <BreacrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem isCurrentPage>
          <BreadcrumbLink to="/events">Events</BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <h1 className="page-title">Events</h1>
      <div className="grid gap-12 lg:gap-24">
        <section className="grid gap-8">
          <h2 className="text-2xl lg:text-4xl text-primary-gradient">
            Upcoming events
          </h2>
          <EventList events={upcomingEvents.nodes} />
        </section>
        <section className="grid gap-8">
          <h2 className="text-2xl lg:text-4xl text-primary-gradient">
            Past events
          </h2>
          <EventList events={pastEvents.nodes} />
        </section>
      </div>
    </article>
  )
}

export default Events
