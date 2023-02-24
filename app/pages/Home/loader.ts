import { newProvidersFactory } from '~/features/providers'
import type { ReturnLoaderData } from '~/types'

export type LoaderData = ReturnLoaderData<typeof loader>

export const loader = async () => {
  const providers = newProvidersFactory()
  const getParticipatingGroupsResult =
    await providers.github.getParticipatingGroups()

  if (getParticipatingGroupsResult.success === false) {
    const { status, message } = getParticipatingGroupsResult
    throw new Response(message, { status })
  }

  const getAllEventsResult = await providers.github.getAllEvents()
  if (getAllEventsResult.success === false) {
    const { message, status } = getAllEventsResult
    throw new Response(message, { status })
  }

  return {
    events: getAllEventsResult.data,
    groups: getParticipatingGroupsResult.data
  }
}
