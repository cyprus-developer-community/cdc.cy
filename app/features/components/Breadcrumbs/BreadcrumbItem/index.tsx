import React from 'react'

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
  return (
    <li className={className} aria-current={isCurrentPage ? 'page' : undefined}>
      {children}
    </li>
  )
}
