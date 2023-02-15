import { newProvidersFactory } from '~/features/providers'
import type { ReturnLoaderData } from '~/types'
import { STATUS_NOT_FOUND } from '~/features/providers/misc/http'

export type LoaderData = ReturnLoaderData<typeof loader>

export const loader = async ({ params }) => {
  const providers = newProvidersFactory()
  const { slug } = params

  if (!slug) {
    throw new Response('Group not found', { status: STATUS_NOT_FOUND })
  }

  const getParticipatingGroupResult =
    await providers.github.getParticipatingGroup(slug)
  if (getParticipatingGroupResult.success === false) {
    const { status, message } = getParticipatingGroupResult
    throw new Response(message, { status })
  }

  return { group: getParticipatingGroupResult.data }
}
