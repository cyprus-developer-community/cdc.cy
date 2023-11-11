import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($organization: String!, $repository: String!) {
      organization(login: $organization) {
        name
        description
        url
        email
        membersWithRole {
          totalCount
        }
        teams(first: 1, query: "Advocates") {
          nodes {
            name
            members(first: 100, orderBy: { field: LOGIN, direction: ASC }) {
              nodes {
                name
                login
                url
                avatarUrl
                bio
              }
            }
          }
        }
      }
      repository(owner: $organization, name: $repository) {
        issues(labels: ["Approved :white_check_mark:", "Event :sparkles:"]) {
          totalCount
        }
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG,
    repository: 'events'
  }
}
