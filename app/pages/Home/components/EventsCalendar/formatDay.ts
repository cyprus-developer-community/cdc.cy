import type { Maybe, Day } from '~/types'

export const formatDay = (day: Day): Maybe<string> => {
  const datePart = day.date.split('-').pop()
  return datePart ? datePart.replace(/^0/, '') : undefined
}
