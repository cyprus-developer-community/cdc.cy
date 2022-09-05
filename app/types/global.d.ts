declare module '*.css'

declare namespace NodeJS {
  interface ProcessEnv {
    GH_APP_ID: string
    GH_PRIVATE_KEY: string
    GH_APP_INSTALLATION_ID: string
  }
}
