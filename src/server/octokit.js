import { Octokit } from '@octokit/core'
import { createAppAuth } from '@octokit/auth-app'

export function ghClient() {
  'use server'

  if (process.env.GH_PAT) {
    // with personal access token (local development)
    return new Octokit({ auth: process.env.GH_PAT })
  } else {
    // with GitHub App (production)
    const appOctokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        appId: process.env.GH_APP_ID,
        privateKey: atob(process.env.GH_PRIVATE_KEY),
        installationId: process.env.GH_APP_INSTALLATION_ID
      }
    })

    return appOctokit
  }
}
