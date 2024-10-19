import { gql } from './utils.js'

export default {
  gql: gql`
    query ($login: String!) {
      user(login: $login) {
        login
        name
        url
        avatarUrl
        status {
          message
          emoji
        }
        bio
      }
    }
  `
}
