import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($organization: String!, $repository: String!, $path: String!) {
      repository(owner: $organization, name: $repository) {
        id
        name
        object(expression: "main:$path") {
          ... on Blob {
            text
          }
        }
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG
  }
}
