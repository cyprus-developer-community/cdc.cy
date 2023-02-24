import type { Maybe } from '~/types'
import React from 'react'
import type { Separator } from '../types'

type BreadcrumbProviderContextProps = {
  separator: Separator
  spacing: number
}
const BreadcrumbProviderContext =
  React.createContext<Maybe<BreadcrumbProviderContextProps>>(undefined)

export const useBreadcrumb = () => {
  const ctx = React.useContext(BreadcrumbProviderContext)
  if (!ctx) {
    throw new Error("Please wrap your component within 'BreadcrumbProvider'")
  }

  return ctx
}

type BreadcrumbProviderProps = {
  children: React.ReactNode
} & BreadcrumbProviderContextProps

export const BreadcrumbProvider = ({
  children,
  separator,
  spacing
}: BreadcrumbProviderProps) => {
  const value = { separator, spacing }
  return (
    <BreadcrumbProviderContext.Provider value={value}>
      {children}
    </BreadcrumbProviderContext.Provider>
  )
}
