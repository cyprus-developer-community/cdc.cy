import type { User } from '../types'

export const calcIsUser = (author: unknown): author is User => {
  // @ts-ignore
  return author?.__typename === 'User'
}
