import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($organization: String!, $repository: String!) {
      repository(owner: $organization, name: $repository) {
        issues(
          first: 100
          orderBy: { field: CREATED_AT, direction: DESC }
          labels: "Approved :white_check_mark:"
        ) {
          nodes {
            id
            number
            title
            url
            author {
              login
            }
          }
        }
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG,
    repository: 'talks'
  }
}
