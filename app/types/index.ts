import type { LoaderArgs, LoaderFunction } from '@remix-run/node'
export type {
  Event,
  User,
  EventLabel,
  EventLocation,
  EventStatus,
  Location,
  Day
} from '~/features/providers/github/commands/types'
export type { ApiResponse } from '~/features/providers/misc/http'

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
