import type {
  ErrorApiResponse,
  SuccessfulApiResponse,
  ErroStatusCode,
  SuccessfulStatusCode
} from './types'
import { toError } from './toError'

export const newErrorResponse = (
  message: string | Error,
  statusCode: ErroStatusCode = 400
): ErrorApiResponse => ({
  success: false,
  status: statusCode,
  message: toError(message).message
})

export const newSuccessfulResponse = <TData>(
  data: TData,
  statusCode: SuccessfulStatusCode = 200
): SuccessfulApiResponse<TData> => ({
  success: true,
  status: statusCode,
  data
})
