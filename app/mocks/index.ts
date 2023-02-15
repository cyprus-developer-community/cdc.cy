import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import getAllEvents from './getAllEvents.json'
import getUpcomingEvents from './getUpcomingEvents.json'
import getPastEvents from './getPastEvents.json'
import getLocations from './getLocations.json'

export const handlers = [
  rest.post(
    'https://api.github.com/app/installations/:installationID/access_tokens',
    (_, res, ctx) => res(ctx.status(200))
  ),
  rest.get(
    'https://raw.githubusercontent.com/cyprus-developer-community/events/main/locations.json',
    (_, res, ctx) => res(ctx.json(getLocations))
  ),
  graphql.query('getAllEvents', async (_, res, ctx) =>
    res(ctx.data(getAllEvents))
  ),
  graphql.query('getPastEvents', async (_, res, ctx) =>
    res(ctx.data(getPastEvents))
  ),
  graphql.query('getUpcomingEvents', async (_, res, ctx) =>
    res(ctx.data(getUpcomingEvents))
  ),
  graphql.query('getEvent', async (req, res, ctx) => {
    const { number } = req.variables
    const events = [
      ...getUpcomingEvents.repository.issues.nodes,
      ...getPastEvents.repository.issues.nodes
    ]
    const event = events.find((currentEvent) => currentEvent.number === number)

    return res(ctx.data({ repository: { issue: event } }))
  })
]

export const server = setupServer(...handlers)
