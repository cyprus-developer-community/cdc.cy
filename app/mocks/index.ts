import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import getEventsQuery from './getEventsQuery.json'

export const handlers = [
  rest.post(
    'https://api.github.com/app/installations/:installationID/access_tokens',
    (_, res, ctx) => res(ctx.status(200))
  ),
  graphql.query('getEvents', async (_, res, ctx) =>
    res(ctx.data(getEventsQuery))
  )
]

export const server = setupServer(...handlers)
