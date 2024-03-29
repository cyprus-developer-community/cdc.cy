import type { ApiResponse } from '~/types'
import type { ErroStatusCode } from '~/features/providers/misc/http'
import {
  newErrorResponse,
  isErrorStatus,
  newSuccessfulResponse
} from '~/features/providers/misc/http'
import type { Location } from './types'

export const getLocations = async (): Promise<ApiResponse<Location[]>> => {
  const res = await fetch(
    'https://raw.githubusercontent.com/cyprus-developer-community/events/main/locations.json'
  )
  if (isErrorStatus(res.status)) {
    const error = await res.json()
    return newErrorResponse(error, res.status as ErroStatusCode)
  }

  const locations: Location[] = await res.json()
  return newSuccessfulResponse(locations)
}
