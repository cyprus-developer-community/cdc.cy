import React from 'react'
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react'

export type BreadcrumbLinkProps = {
  children: React.ReactNode
} & LinkProps

export const BreadcrumbLink = ({ children, ...rest }: BreadcrumbLinkProps) => {
  return <Link {...rest}>{children}</Link>
}
