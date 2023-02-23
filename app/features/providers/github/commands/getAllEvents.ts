import getAllEventsQuery from '~/features/providers/github/graphql/queries/getAllEvents.graphql'
// import { getLocations } from './getLocations'
import { newGraphQLClientFactory } from '~/features/providers/github/newGraphQLClientFactory'
import { calculateDays } from './misc/calculateDays'
import { mapIssueToEvent } from './misc/mapIssueToEvent'
import type { GetAllEventsQuery } from '../graphql/types'

export async function getAllEvents() {
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

  const issues = response.repository.issues.nodes

  if (issues.length === 0) {
    return {
      upcoming: [],
      past: [],
      days: calculateDays([])
    }
  }

  const unfilteredEvents = await Promise.all(issues.map(mapIssueToEvent))
  const events = unfilteredEvents.filter(Boolean)

  const days = calculateDays(events)
  const sorted = events.sort((a, b) =>
    new Date(a.start) > new Date(b.start) ? -1 : 1
  )
  const upcoming = sorted.filter((event) => event.type === 'upcoming')
  const past = sorted.filter((event) => event.type === 'past')
  return {
    upcoming,
    past,
    days
  }
}
