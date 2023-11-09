import { Octokit } from '@octokit/core'
import { createAppAuth } from '@octokit/auth-app'

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GH_APP_ID,
    privateKey: atob(process.env.GH_PRIVATE_KEY)
  }
})

const { token } = await appOctokit.auth({
  type: 'installation',
  installationId: process.env.GH_APP_INSTALLATION_ID
})

export { token, appOctokit as octokit }
