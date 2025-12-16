/**
 * Events fetching using gitevents-fetch package
 * Wraps gitevents-fetch and transforms data for the UI
 */
import {
  upcomingEvents as getUpcomingEvents,
  pastEvents as getPastEvents,
  getTeam as getTeamMembers,
  getOrganization
} from 'gitevents-fetch'

/**
 * Transform event data from gitevents-fetch to UI format
 */
function transformEvent(event) {
  // Date is now provided directly by gitevents-fetch
  const eventDate = event.date

  // Transform talks to speakers format
  // Use GitHub user's display name, fallback to username
  const speakers =
    event.talks?.map((talk) => ({
      name: talk.author?.name || talk.author?.login || 'TBA',
      login: talk.author?.login,
      githubUrl: talk.author?.login
        ? `https://github.com/${talk.author.login}`
        : null,
      talk: talk.title,
      url: talk.url,
      avatarUrl: talk.author?.avatarUrl,
      abstract:
        talk.facets?.['talk-abstract']?.text ||
        talk.facets?.['talk-description']?.text ||
        talk.body?.substring(0, 200)
    })) || []

  return {
    id: event.number.toString(),
    title: event.title,
    date: eventDate,
    dateString: eventDate
      ? eventDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      : 'TBA',
    url: event.url,
    speakers
  }
}

/**
 * Fetch upcoming events with speakers
 */
export async function fetchUpcomingEvents() {
  try {
    const events = await getUpcomingEvents(
      'cyprus-developer-community',
      'events'
    )

    // Filter for future events only
    const now = new Date()
    const filteredEvents = events
      .map(transformEvent)
      .filter((event) => event.date && event.date >= now)

    return filteredEvents
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
}

/**
 * Fetch past events (closed events)
 */
export async function fetchPastEvents() {
  try {
    const events = await getPastEvents('cyprus-developer-community', 'events')

    // Transform events
    const filteredEvents = events
      .map(transformEvent)
      .filter((event) => event.date)

    return filteredEvents
  } catch (error) {
    console.error('Error fetching past events:', error)
    return []
  }
}

/**
 * Get all unique speakers from events with enhanced data
 */
export function getSpeakers(events) {
  const speakersMap = new Map()

  events.forEach((event) => {
    event.speakers.forEach((speaker) => {
      const key = speaker.login || speaker.name
      if (!speakersMap.has(key)) {
        speakersMap.set(key, {
          name: speaker.name,
          login: speaker.login,
          githubUrl: speaker.githubUrl,
          avatarUrl: speaker.avatarUrl,
          talks: []
        })
      }
      speakersMap.get(key).talks.push({
        title: speaker.talk,
        abstract: speaker.abstract,
        event: event.title,
        date: event.dateString,
        url: speaker.url
      })
    })
  })

  return Array.from(speakersMap.values())
}

/**
 * Fetch team members from GitHub organization
 */
export async function fetchTeamMembers(org, teamSlug) {
  try {
    const team = await getTeamMembers(org, teamSlug)
    return team?.members || []
  } catch (error) {
    console.error(`Error fetching team ${teamSlug}:`, error)
    return []
  }
}

/**
 * Fetch organization data from GitHub
 */
export async function fetchOrganization(org) {
  try {
    const orgData = await getOrganization(org)
    return orgData
  } catch (error) {
    console.error(`Error fetching organization ${org}:`, error)
    return null
  }
}
