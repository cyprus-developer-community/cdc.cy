import { gql } from './utils.js'

export default {
  gql: function (p) {
    const path = p ?? 'README.md'
    return gql`
    query ($organization: String!, $repository: String!) {
      repository(owner: $organization, name: $repository) {
        id
        name
        object(expression: "main:${path}") {
          ... on Blob {
            text
          }
        }
      }
    }
  `
  },
  vars: {
    organization: process.env.GH_ORG
  }
}
