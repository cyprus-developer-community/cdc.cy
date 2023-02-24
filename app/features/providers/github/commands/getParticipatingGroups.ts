import type { ApiResponse } from '~/types'
import {
  newErrorResponse,
  newSuccessfulResponse,
  isErrorStatus
} from '~/features/providers/misc/http'

type Logo = {
  svg?: string
  png: string
  width: number
  height: number
}

export type GroupLinkType = 'website' | 'meetup' | 'linkedin' | 'facebook'
export type GroupLink<TGroupLinkType extends GroupLinkType = GroupLinkType> = {
  type: TGroupLinkType
  href: string
}

export type Organizer = {
  name: string
  github: string
  avatar: string
}

export type Group = {
  name: string
  slug: string
  logo: Logo
  organizers: Organizer[]
  links: GroupLink[]
  excerpt: string
}

export const getParticipatingGroups = async (): Promise<
  ApiResponse<Group[]>
> => {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/cyprus-developer-community/home/main/groups.json'
    )
    if (isErrorStatus(res.status)) {
      const result = await res.json()
      return newErrorResponse(result)
    }

    const groups: Group[] = await res.json()
    return newSuccessfulResponse(groups)
  } catch (e) {
    return newErrorResponse(e)
  }
}
