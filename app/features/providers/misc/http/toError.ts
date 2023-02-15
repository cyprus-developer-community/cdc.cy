export const toError = (message: unknown): Error => {
  if (message instanceof Error) {
    return message
  }
  return new Error(JSON.stringify(message))
}
