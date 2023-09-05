import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type FallbackRenderProps = {
  error: Error
  resetErrorBoundary: () => void
}

const FallbackRender = ({ error }: FallbackRenderProps) => {
  // eslint-disable-next-line no-console
  console.error('Error description: ', error.message)

  return (
    <div role="alert">
      <p className="text-center text-red-500">
        We encountered an internal error. Please try again.
      </p>
    </div>
  )
}

type CatchErrorBoundaryProps = {
  children: React.ReactNode
}

export const CatchErrorBoundary = ({ children }: CatchErrorBoundaryProps) => {
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>{children}</ErrorBoundary>
  )
}
