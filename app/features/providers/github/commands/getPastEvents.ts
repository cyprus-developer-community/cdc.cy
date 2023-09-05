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
import { cache } from './misc/cache'

export const getPastEvents = async (
  nextToken?: String
): Promise<ApiResponse<Event[]>> => {
  try {
    if (cache.has('pastEvents')) {
      return newSuccessfulResponse(cache.get('pastEvents'))
    }

    const client = newGraphQLClientFactory()
    const res = await client<GetPastEventsQuery>(getPastEventsQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      size: 20,
      after: nextToken
    })

    const events = await mapIssuesToEvents(res.repository.issues.nodes)
    cache.set('pastEvents', events, 60 * 60 * 24)
    return newSuccessfulResponse(events)
  } catch (e) {
    return newErrorResponse(e)
  }
}
