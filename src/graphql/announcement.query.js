import { gql } from '@solid-primitives/graphql'

export default {
  gql: gql`
    query (
      $organization: String!
      $repository: String!
      $announcementCategoryId: ID!
    ) {
      repository(owner: $organization, name: $repository) {
        discussions(first: 1, categoryId: $announcementCategoryId) {
          nodes {
            title
            body
          }
        }
      }
    }
  `,
  vars: {
    organization: process.env.GH_ORG,
    repository: 'home',
    announcementCategoryId: 'DIC_kwDOG41Ukc4CBSDX'
  }
}
