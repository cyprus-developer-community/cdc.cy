import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import getEventQuery from '~/features/providers/github/graphql/queries/getEvent.graphql'
import type { GetEventQuery } from '~/features/providers/github/graphql/types'
import {
  newErrorResponse,
  newSuccessfulResponse
} from '~/features/providers/misc/http'

export const getEvent = async (index: number) => {
  try {
    const client = newGraphQLClientFactory()

    const res = await client<GetEventQuery>(getEventQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events',
      number: index
    })

    return newSuccessfulResponse(res.repository.issue)
  } catch (e) {
    return newErrorResponse(e)
  }
}
