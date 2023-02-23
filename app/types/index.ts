import type { LoaderArgs, LoaderFunction } from '@remix-run/node'
import type {
  GetUpcomingEventsQuery,
  GetPastEventsQuery
} from '~/features/providers/github/graphql/types'
export * from '~/features/providers/github/commands/types'
// export * from '~/features/providers/github/graphql/types'
export type { ApiResponse } from '~/features/providers/misc/http'

export type UpcomingEventConnection =
  GetUpcomingEventsQuery['repository']['issues']
export type PastEventConnection = GetPastEventsQuery['repository']['issues']
export type UpcomingEvent =
  GetUpcomingEventsQuery['repository']['issues']['nodes']['0']
export type PastEvent = GetPastEventsQuery['repository']['issues']['nodes']['0']
export type Event = UpcomingEvent | PastEvent

export type Nullable<TData = unknown> = TData | null
export type Maybe<TData = unknown> = TData | undefined
export type ID = string

export type {
  Group,
  Organizer,
  GroupLink
} from '~/features/providers/github/commands/getParticipatingGroups'

export type ReturnLoaderData<TFn extends LoaderFunction> = TFn extends (
  args: LoaderArgs
) => Promise<infer D>
  ? D
  : never
