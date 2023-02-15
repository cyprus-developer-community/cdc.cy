import { Link, useLoaderData } from '@remix-run/react'
import type { LoaderData } from './loader'

const Events = () => {
  const { pastEvents } = useLoaderData() as LoaderData

  return (
    <section>
      <ul>
        {pastEvents.nodes.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.number}`}>{event.id} </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Events
