import { fetch } from 'undici'
import { createGraphQLClient } from '@solid-primitives/graphql'
import { token } from './octokit.server.js'

export default createGraphQLClient(process.env.GH_GRAPHQL_URL, {
  fetcher: fetch,
  headers: {
    Authorization: `Bearer ${token}`
  }
})
