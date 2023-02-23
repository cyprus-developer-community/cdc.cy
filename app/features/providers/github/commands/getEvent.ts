import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getEventQuery from '~/features/providers/github/graphql/queries/getEvent.graphql'
import type { GetEventQuery } from '~/features/providers/github/graphql/types'
import type { ApiResponse } from '~/features/providers/misc/http'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'
import type { Event } from '~/types'
import { mapIssueToEvent } from './misc/mapIssueToEvent'

export const getEvent = async (index: number): Promise<ApiResponse<Event>> => {
  try {
    const client = newGraphQLClientFactory()

    const res = await client<GetEventQuery>(getEventQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      number: index
    })

    const event = await mapIssueToEvent(res.repository.issue)
    return newSuccessfulResponse(event)
  } catch (e) {
    return newErrorResponse(e)
  }
}
