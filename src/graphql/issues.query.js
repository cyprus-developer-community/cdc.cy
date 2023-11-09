import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($organization: String!, $repository: String!) {
      repository(owner: $organization, name: $repository) {
        issues(first: 100, states: OPEN) {
          nodes {
            title
            url
            body
            bodyText
            bodyHTML
            reactions(first: 100) {
              nodes {
                content
              }
            }
          }
        }
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG
  }
}
