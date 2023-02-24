import type { Maybe } from '~/types'
import { marked } from 'marked'

export const tryParseDescription = (description: string): Maybe<string> => {
  try {
    return marked(description)
  } catch (e) {
    return description
  }
}
