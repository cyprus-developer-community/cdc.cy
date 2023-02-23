declare module '@zentered/issue-forms-body-parser' {
  type BaseValue = {
    title: string
    heading: number
    content: string[]
    text: string
  }

  type DateValue = BaseValue & {
    date: string
  }

  type TimeValue = BaseValue & {
    time: string
  }
  type DurationValue = BaseValue & {
    duration?: { hours: number; minutes: number }
  }
  type CodeOfConductValue = BaseValue & {
    list: CodeOfConductListitem[]
  }

  type CodeOfConductListitem = {
    checked: boolean
    link: string
    text: string
  }

  type ParsedIssue = {
    date: DateValue
    time: TimeValue
    duration: DurationValue
    location: BaseValue
    'event-description': BaseValue
    'code-of-conduct': CodeOfConductValue
  }
}
