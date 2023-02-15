import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getPastEventsQuery from '~/features/providers/github/graphql/queries/getPastEvents.graphql'
import type { GetPastEventsQuery } from '~/features/providers/github/graphql/types'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'

export const getPastEvents = async (nextToken?: String) => {
  try {
    const client = newGraphQLClientFactory()

    const res = await client<GetPastEventsQuery>(getPastEventsQuery, {
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
