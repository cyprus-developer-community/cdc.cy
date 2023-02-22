import { Link } from '@remix-run/react'
import type { LinkProps } from '@remix-run/react'

export type AvatarLinkProps = {
  children: React.ReactNode
} & LinkProps

export const AvatarLink = ({ children, ...rest }: AvatarLinkProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="!rounded-full w-fit outline-3 outline-transparent outline hover:outline-primary-400 focus:outline-primary-400"
      {...rest}
    >
      {children}
    </Link>
  )
}
