import { useLoaderData } from '@remix-run/react'
import type { LoaderData } from './loader'

const Event = () => {
  const { event } = useLoaderData() as LoaderData

  return <div>{event.id}</div>
}

export default Event
