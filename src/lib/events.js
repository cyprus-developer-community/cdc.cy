/**
 * Events and data fetching using gitevents-fetch package
 * Wraps gitevents-fetch and transforms data for the UI
 */
import {
  upcomingEvents as getUpcomingEvents,
  pastEvents as getPastEvents,
  getTeam as getTeamMembers
} from 'gitevents-fetch'
import bodyParser from '@zentered/issue-forms-body-parser'

const ORG = 'cyprus-developer-community'
const EVENTS_REPO = 'events'

/**
 * Transform event data from gitevents-fetch to UI format with parsed body
 */
async function transformEvent(event) {
  // Parse the issue body using issue-forms-body-parser
  const parsed = await bodyParser(event.body || '')

  // Extract date from parsed data
  const eventDate = parsed?.date?.date ? new Date(parsed.date.date) : null

  return {
    number: event.number,
    title: event.title,
    body: event.body,
    url: event.url,
    date: eventDate,
    dateString: eventDate
      ? eventDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      : 'TBA',
    parsed // Include all parsed data for featured images, etc.
  }
}

/**
 * Fetch upcoming events
 */
export async function fetchUpcomingEvents() {
  try {
    const events = await getUpcomingEvents(ORG, EVENTS_REPO)

    // Transform and parse all events
    const transformedEvents = await Promise.all(
      events.map((event) => transformEvent(event))
    )

    // Filter for future events only
    const now = new Date()
    return transformedEvents.filter((event) => !event.date || event.date >= now)
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
}

/**
 * Fetch past events
 */
export async function fetchPastEvents() {
  try {
    const events = await getPastEvents(ORG, EVENTS_REPO)

    // Transform and parse all events
    const transformedEvents = await Promise.all(
      events.map((event) => transformEvent(event))
    )

    return transformedEvents
  } catch (error) {
    console.error('Error fetching past events:', error)
    return []
  }
}

/**
 * Fetch a single event by number
 */
export async function fetchEvent(eventNumber) {
  try {
    // Fetch from both upcoming and past events
    const [upcoming, past] = await Promise.all([
      fetchUpcomingEvents(),
      fetchPastEvents()
    ])

    const allEvents = [...upcoming, ...past]
    return allEvents.find((event) => event.number === parseInt(eventNumber))
  } catch (error) {
    console.error(`Error fetching event ${eventNumber}:`, error)
    return null
  }
}

/**
 * Fetch team members (e.g., advocates)
 */
export async function fetchTeamMembers(teamSlug = 'advocates') {
  try {
    const team = await getTeamMembers(ORG, teamSlug)
    return team?.members || []
  } catch (error) {
    console.error(`Error fetching team ${teamSlug}:`, error)
    return []
  }
}

/**
 * Calculate organization stats from already-fetched events
 * This avoids duplicate API calls
 */
export function calculateOrganizationStats(
  upcomingEvents = [],
  pastEvents = []
) {
  return {
    totalEvents: upcomingEvents.length + pastEvents.length,
    upcomingEvents: upcomingEvents.length,
    // These require additional API support from gitevents-fetch
    members: null, // TODO: Add to feature-requests.md
    discordUsers: '300+' // Hardcoded for now
  }
}
