import React from 'react'
import { useBreadcrumb } from '../Provider'

export type BreacrumbItemProps = {
  isCurrentPage?: boolean
  children: React.ReactNode
  className?: string
}

export const BreacrumbItem = ({
  isCurrentPage,
  children,
  className
}: BreacrumbItemProps) => {
  const { separator, spacing } = useBreadcrumb()
  return (
    <li className={className} aria-current={isCurrentPage ? 'page' : undefined}>
      {children}
      {!isCurrentPage && (
        <span className={`px-${spacing}`} role="presentation">
          {separator}
        </span>
      )}
    </li>
  )
}
