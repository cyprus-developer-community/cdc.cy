import type * as c from './constants'
export type SuccessfulStatusCode =
  | typeof c.STATUS_OK
  | typeof c.STATUS_CREATED
  | typeof c.STATUS_NO_CONTENT
export type ErroStatusCode =
  | typeof c.STATUS_BAD_REQUEST
  | typeof c.STATUS_UNAUTHORIZED
  | typeof c.STATUS_FORBIDDEN
  | typeof c.STATUS_NOT_FOUND
  | typeof c.STATUS_METHOD_NOT_ALLOWED
  | typeof c.STATUS_INTERNAL_SERVER_ERROR
  | typeof c.STATUS_GATEWAY_TIMEOUT

export type StatusCode = SuccessfulStatusCode | ErroStatusCode

export type SuccessfulApiResponse<TData> = {
  success: true
  status: SuccessfulStatusCode
  data: TData
}
export type ErrorApiResponse = {
  success: false
  status: ErroStatusCode
  message: string
}

export type ApiResponse<TData = unknown> =
  | SuccessfulApiResponse<TData>
  | ErrorApiResponse
