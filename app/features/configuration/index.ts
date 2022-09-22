import { config } from './config'

export * from './selectors'

export type Config = typeof config

export const getConfig = (): Config => config
