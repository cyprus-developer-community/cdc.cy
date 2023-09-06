import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getPastEventsQuery from '~/features/providers/github/graphql/queries/getPastEvents.graphql'
import type { GetPastEventsQuery } from '~/features/providers/github/graphql/types'
import type { ApiResponse } from '~/features/providers/misc/http'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'
import { mapIssuesToEvents } from './misc/mapIssueToEvent'
import type { Event } from './types'
import { fetchCached } from './misc/cache'

export const getPastEvents = async (
  nextToken?: String
): Promise<ApiResponse<Event[]>> => {
  try {
    const client = newGraphQLClientFactory()

    const cacheKey = 'pastEvents'
    const events = await fetchCached(cacheKey, async () => {
      const res = await client<GetPastEventsQuery>(getPastEventsQuery, {
        owner: 'cyprus-developer-community',
        repo: 'events',
        size: 20,
        after: nextToken
      })

      return mapIssuesToEvents(res.repository.issues.nodes)
    })
    return newSuccessfulResponse(events)
  } catch (e) {
    return newErrorResponse(e)
  }
}
