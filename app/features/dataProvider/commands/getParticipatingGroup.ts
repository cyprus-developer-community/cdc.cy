import type { ApiResponse } from '@types'
import { ErrGroupNotFound } from './constants'
import { getParticipatingGroups } from './getParticipatingGroups'
import type { Group } from '.'

export const getParticipatingGroup = async (
  slug: string
): Promise<ApiResponse<Group>> => {
  try {
    const [error, groups] = await getParticipatingGroups()
    if (error) {
      return [error]
    }
    const group = groups.find((group) => group.slug === slug)
    if (!group) {
      return [ErrGroupNotFound]
    }

    return [undefined, group]
  } catch (e) {
    return [e]
  }
}
