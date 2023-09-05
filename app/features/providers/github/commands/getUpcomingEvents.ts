import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getUpcomingEventsQuery from '~/features/providers/github/graphql/queries/getUpcomingEvents.graphql'
import type { GetUpcomingEventsQuery } from '~/features/providers/github/graphql/types'
import type { ApiResponse } from '~/features/providers/misc/http'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'
import type { Event } from './types'
import { mapIssuesToEvents } from './misc/mapIssueToEvent'
import { cache } from './misc/cache'

export const getUpcomingEvents = async (
  nextToken?: String
): Promise<ApiResponse<Event[]>> => {
  try {
    if (cache.has('upcomingEvents')) {
      return newSuccessfulResponse(cache.get('upcomingEvents'))
    }

    const client = newGraphQLClientFactory()
    const res = await client<GetUpcomingEventsQuery>(getUpcomingEventsQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      size: 20,
      after: nextToken
    })

    const events = await mapIssuesToEvents(res.repository.issues.nodes)
    cache.set('upcomingEvents', events, 60 * 60 * 24)
    return newSuccessfulResponse(events)
  } catch (e) {
    return newErrorResponse(e)
  }
}
