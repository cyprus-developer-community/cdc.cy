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
