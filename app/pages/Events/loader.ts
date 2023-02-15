import type { ReturnLoaderData } from '~/types'
import { newProvidersFactory } from '~/features/providers'

export type LoaderData = ReturnLoaderData<typeof loader>

export const loader = async () => {
  const providers = newProvidersFactory()

  const getUpcomingEventsResult = await providers.github.getUpcomingEvents()

  if (getUpcomingEventsResult.success === false) {
    const { status, message } = getUpcomingEventsResult
    throw new Response(message, { status })
  }

  const getPastEventsResult = await providers.github.getPastEvents()

  if (getPastEventsResult.success === false) {
    const { status, message } = getPastEventsResult
    throw new Response(message, { status })
  }

  return {
    pastEvents: getPastEventsResult.data,
    upcomingEvents: getUpcomingEventsResult.data
  }
}
