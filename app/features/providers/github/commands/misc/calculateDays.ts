import {
  format,
  add,
  sub,
  isSameDay,
  isSameMonth,
  startOfMonth
} from 'date-fns'
import type { Event, Day } from '../types'

export function calculateDays(events: Event[]): Day[] {
  function compareDateStrings(a: string, b: string) {
    const aDate = a.split('T')[0]
    return aDate === b
  }

  const days: Day[] = []
  const today = new Date()
  // TODO: seems there's an issue with 31/30 days
  let slider = sub(startOfMonth(today), { days: 6 })
  for (let idx = 0; idx < 40; idx++) {
    const currentday: Day = {
      date: format(slider, 'yyyy-MM-dd'),
      isToday: false,
      isCurrentMonth: false,
      isSelected: false
    }

    if (isSameDay(slider, today)) {
      currentday.isToday = true
    }

    if (isSameMonth(slider, today)) {
      currentday.isCurrentMonth = true
    }

    days.push(currentday)
    slider = add(slider, { days: 1 })
  }

  for (const event of events) {
    const found = days.findIndex((d) => compareDateStrings(event.start, d.date))
    if (found > 0) {
      days[found].hasEvent = true
      days[found].eventTitle = event.title
    }
  }

  return days
}
