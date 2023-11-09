import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($organization: String!) {
      organization(login: $organization) {
        name
        description
        url
        email
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG
  }
}
