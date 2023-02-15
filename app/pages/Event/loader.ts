import type { ReturnLoaderData } from '~/types'
import { newProvidersFactory } from '~/features/providers'
import type { LoaderArgs } from '@remix-run/node'
import { STATUS_NOT_FOUND } from '~/features/providers/misc/http'

export type LoaderData = ReturnLoaderData<typeof loader>

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params
  if (!id) {
    throw new Response('Event not found', { status: STATUS_NOT_FOUND })
  }
  const providers = newProvidersFactory()

  const getEventResult = await providers.github.getEvent(parseInt(id))

  if (getEventResult.success === false) {
    const { status, message } = getEventResult
    throw new Response(message, { status })
  }

  return {
    event: getEventResult.data
  }
}
