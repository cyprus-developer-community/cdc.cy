import type { User, Issue } from '../types'

export const mapToAttendees = (
  participants: Issue['participants'],
  reactions: Issue['reactions']
): User[] => {
  const unfilteredAttendees = [
    ...reactions.nodes.map(({ user }): User => user),
    ...participants.nodes
  ]
  return Object.values(
    unfilteredAttendees.reduce(
      (attendees, user) => ({ ...attendees, [user.login]: user }),
      {} as Record<string, User>
    )
  )
}
