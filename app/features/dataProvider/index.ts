import * as commands from './commands'

export type { Group } from './commands'
export * from './selectors'

export const newDataProvider = () => ({ commands })
