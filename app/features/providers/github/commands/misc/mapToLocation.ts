import type { Location, EventLocation } from '../types'
import type { ParsedIssueBody } from '@zentered/issue-forms-body-parser'

export const mapToLocation = (
  locations: Location[],
  eventLocation: ParsedIssueBody['location']
): EventLocation => {
  const locationsHash = locations.reduce(
    (hash, location) => ({
      ...hash,
      [location.id.toLowerCase()]: location
    }),
    {} as Record<Location['id'], Location>
  )
  const locationLookup = locationsHash[eventLocation.text.toLocaleLowerCase()]

  if (locationLookup && locationLookup.geo) {
    const [lat, lon] = locationLookup.geo
    return { lat, lon }
  }
  return eventLocation.text
}
