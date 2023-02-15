import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getUpcomingEventsQuery from '~/features/providers/github/graphql/queries/getUpcomingEvents.graphql'
import type { GetUpcomingEventsQuery } from '~/features/providers/github/graphql/types'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'

export const getUpcomingEvents = async (nextToken?: String) => {
  try {
    const client = newGraphQLClientFactory()

    const res = await client<GetUpcomingEventsQuery>(getUpcomingEventsQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      size: 20,
      after: nextToken
    })

    return newSuccessfulResponse(res.repository.issues)
  } catch (e) {
    return newErrorResponse(e)
  }
}
