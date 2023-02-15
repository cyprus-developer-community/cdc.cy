export function assertIsDefined<TValue>(
  name: string,
  value?: TValue
): asserts value is NonNullable<TValue> {
  if (!value) {
    throw new Error(`${name} is not defined`)
  }
  return
}
