export type Nullable<TData = unknown> = TData | null
export type Maybe<TData = unknown> = TData | undefined
export type ID = string
export type ApiResponse<TData = unknown, TError extends Error = Error> =
  | [TError]
  | [null, TData]

export type {
  Group,
  Organizer,
  GroupLink
} from '~/features/dataProvider/commands/getParticipatingGroups'
