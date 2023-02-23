declare module '@zentered/issue-forms-body-parser*' {
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
    list: {
      checked: boolean
      link: string
      text: string
    }[]
  }

  export type EmptyParsedIssueBody = {}

  export type ParsedIssueBody = {
    date: DateValue
    time: TimeValue
    duration: DurationValue
    location: BaseValue
    'event-description': BaseValue
    'code-of-conduct': CodeOfConductValue
  }

  function parser(body: string): Promise<ParsedIssueBody | EmptyParsedIssueBody>
  export = parser
}
