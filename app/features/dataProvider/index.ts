import * as commands from './commands'

export type { Group, Organizer } from './commands'
export type GetEventsResult = Awaited<ReturnType<typeof commands.getEvents>>
export * from './commands/constants'

export * from './selectors'

export const newDataProvider = () => ({ commands })
