import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query ($login: String!) {
      user(login: $login) {
        login
        avatarUrl
        status {
          message
          emoji
        }
        bio
        repository(name: $login) {
          id
          name
          object(expression: "main:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  `
}
