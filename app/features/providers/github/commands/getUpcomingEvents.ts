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

export const getUpcomingEvents = async (
  nextToken?: String
): Promise<ApiResponse<Event[]>> => {
  try {
    const client = newGraphQLClientFactory()

    const res = await client<GetUpcomingEventsQuery>(getUpcomingEventsQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      size: 20,
      after: nextToken
    })

    const events = await mapIssuesToEvents(res.repository.issues.nodes)
    return newSuccessfulResponse(events)
  } catch (e) {
    return newErrorResponse(e)
  }
}
