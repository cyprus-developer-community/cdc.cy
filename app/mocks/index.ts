import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import lastIssues from './lastIssues.json'

export const handlers = [
  rest.post(
    'https://api.github.com/app/installations/:installationID/access_tokens',
    (_, res, ctx) => res(ctx.status(200))
  ),
  graphql.query('lastIssues', (_, res, ctx) => res(ctx.data(lastIssues)))
]

export const server = setupServer(...handlers)
