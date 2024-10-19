/**
 * Creates a GraphQL query string.
 */
export const gql = (query, ...expressions) =>
  query
    .map((s, i) => `${s}${expressions[i] ?? ''}`)
    .join('')
    .replace(/#.+\r?\n|\r/g, '')
    .replace(/\r?\n|\r/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
