import type { ReturnLoaderData } from '~/types'
import { newProvidersFactory } from '~/features/providers'
import { defer } from '@remix-run/node'

export type LoaderData = ReturnLoaderData<typeof loader>

export const loader = async () => {
  const providers = newProvidersFactory()

  return defer({
    pastEventsPromise: providers.github.getPastEvents(),
    upcomingEventsPromise: providers.github.getUpcomingEvents()
  })
}
