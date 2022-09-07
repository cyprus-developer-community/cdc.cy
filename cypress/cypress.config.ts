import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    video: false,
    specPattern: ['./cypress/e2e/**/*.spec.ts'],
    retries: {
      openMode: 1,
      runMode: 2,
    },
  },
})
