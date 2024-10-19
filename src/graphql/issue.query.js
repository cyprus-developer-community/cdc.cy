import { gql } from './utils.js'

export default {
  gql: gql`
    query ($organization: String!, $repository: String!, $number: Int!) {
      repository(owner: $organization, name: $repository) {
        issue(number: $number) {
          id
          number
          title
          url
          body
          reactions(first: 100) {
            nodes {
              content
            }
          }
          comments(first: 100) {
            nodes {
              id
              author {
                login
              }
              body
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
