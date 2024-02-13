import { ghClient } from './octokit.js'

export default async function graphQLFetch(query, variables) {
  'use server'

  const octokit = ghClient()

  return octokit.graphql(query, variables)
}
