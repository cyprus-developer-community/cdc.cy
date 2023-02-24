import type { ApiResponse } from '~/types'
import { getParticipatingGroups } from './getParticipatingGroups'
import type { Group } from '.'
import {
  newErrorResponse,
  newSuccessfulResponse,
  STATUS_NOT_FOUND
} from '~/features/providers/misc/http'

const ErrGroupNotFound = new Error('error: participating group not found')

export const getParticipatingGroup = async (
  slug: string
): Promise<ApiResponse<Group>> => {
  try {
    const getParticipatingGroupsResult = await getParticipatingGroups()
    if (getParticipatingGroupsResult.success === false) {
      return getParticipatingGroupsResult
    }

    const groups = getParticipatingGroupsResult.data
    const group = groups.find((group) => group.slug === slug)
    if (!group) {
      return newErrorResponse(ErrGroupNotFound, STATUS_NOT_FOUND)
    }

    return newSuccessfulResponse(group)
  } catch (e) {
    return newErrorResponse(e)
  }
}
