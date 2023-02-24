import getAllEventsQuery from '~/features/providers/github/graphql/queries/getAllEvents.graphql'
// import { getLocations } from './getLocations'
import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import { calculateDays } from './misc/calculateDays'
import { mapIssuesToEvents } from './misc/mapIssueToEvent'
import type { GetAllEventsQuery } from '../graphql/types'
import type { ApiResponse, Event, Day } from '~/types'
import { newErrorResponse, newSuccessfulResponse } from '../../misc/http'

type GetAllEventsResult = {
  upcoming: Event[]
  past: Event[]
  days: Day[]
}

export const getAllEvents = async (): Promise<
  ApiResponse<GetAllEventsResult>
> => {
  try {
    const client = newGraphQLClientFactory()
    // const getLocationsResult = await getLocations()
    // if (getLocationsResult.success === false) {
    //   const { message } = getLocationsResult
    //   throw new Error(message)
    // }

    // const locations = getLocationsResult.data
    const response: GetAllEventsQuery = await client(getAllEventsQuery, {
      owner: 'cyprus-developer-community',
      repo: 'events'
    })

    const past = await mapIssuesToEvents(response.getPastEvents.issues.nodes)
    const upcoming = await mapIssuesToEvents(
      response.getUpcomingEvents.issues.nodes
    )
    const days = calculateDays([...past, ...upcoming])
    return newSuccessfulResponse({ upcoming, past, days })
  } catch (e) {
    return newErrorResponse(e)
  }
}
