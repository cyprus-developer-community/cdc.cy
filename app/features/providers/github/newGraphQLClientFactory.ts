import { createAppAuth } from '@octokit/auth-app'
import { graphql } from '@octokit/graphql'
import { assertIsDefined } from '~/features/providers/misc/assertIsDefined'

const { GH_APP_ID, GH_PRIVATE_KEY, GH_APP_INSTALLATION_ID } = process.env

assertIsDefined('GH_APP_ID', GH_APP_ID)
assertIsDefined('GH_PRIVATE_KEY', GH_PRIVATE_KEY)
assertIsDefined('GH_APP_INSTALLATION_ID', GH_APP_INSTALLATION_ID)

export const newGraphQLClientFactory = () => {
  const auth = createAppAuth({
    appId: parseInt(GH_APP_ID),
    privateKey: atob(GH_PRIVATE_KEY),
    installationId: parseInt(GH_APP_INSTALLATION_ID)
  })

  return graphql.defaults({
    request: {
      hook: auth.hook
    }
  })
}
