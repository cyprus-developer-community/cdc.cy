import { Octokit } from '@octokit/core'
import { createAppAuth } from '@octokit/auth-app'

let token = ''

async function octokit() {
  if (process.env.GH_PAT) {
    // with personal access token (local development)
    const patOctokit = new Octokit({ auth: process.env.GH_PAT })

    token = process.env.GH_PAT
    return patOctokit
  } else {
    // with GitHub App (production)
    const appOctokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        appId: process.env.GH_APP_ID,
        privateKey: atob(process.env.GH_PRIVATE_KEY)
      }
    })

    const { token: appToken } = await appOctokit.auth({
      type: 'installation',
      installationId: process.env.GH_APP_INSTALLATION_ID
    })

    token = appToken
    return appOctokit
  }
}

export { octokit, token }
