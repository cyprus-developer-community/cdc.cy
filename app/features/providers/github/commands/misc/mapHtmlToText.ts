import type { Maybe } from '~/types'
export const mapHtmlToText = (text?: string): Maybe<string> =>
  text ? text.replace(/<[^>]*>/g, '') : undefined
