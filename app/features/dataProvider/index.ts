import * as commands from './commands'

export type { Group } from './commands'
export type GetEventsResult = Awaited<ReturnType<typeof commands.getEvents>>

export * from './selectors'

export const newDataProvider = () => ({ commands })
