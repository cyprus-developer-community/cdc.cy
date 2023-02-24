import type {
  ParsedIssueBody,
  EmptyParsedIssueBody
} from '@zentered/issue-forms-body-parser'
export const calcIsIBodyParsed = (
  body: ParsedIssueBody | EmptyParsedIssueBody
): body is ParsedIssueBody => {
  const assertedBody = body as ParsedIssueBody
  return Boolean(
    assertedBody?.duration &&
      assertedBody?.date &&
      assertedBody?.location &&
      assertedBody?.time &&
      assertedBody?.['code-of-conduct'] &&
      assertedBody?.['event-description']
  )
}
