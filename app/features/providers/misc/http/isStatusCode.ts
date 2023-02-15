import { STATUS_OK, STATUS_CREATED, STATUS_NO_CONTENT } from './constants'
import type { ErroStatusCode, SuccessfulStatusCode } from './types'

export const isSuccessfulStatus = (
  status: number
): status is SuccessfulStatusCode =>
  Boolean(
    status === STATUS_OK ||
      status === STATUS_CREATED ||
      status === STATUS_NO_CONTENT
  )

export const isErrorStatus = (status: number): status is ErroStatusCode =>
  Boolean(!isSuccessfulStatus(status))
