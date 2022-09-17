import React from 'react'
import type { NavLinkProps } from '@remix-run/react'
import { NavLink, Link } from '@remix-run/react'
import { Image } from 'remix-image'

const HeaderLink: React.FC<NavLinkProps> = ({ children, ...rest }) => {
  return (
    <NavLink
      className="text-lg font-bold text-gray-500 hover:text-gray-900 ml-4"
      {...rest}
    >
      {children}
    </NavLink>
  )
}

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-50 py-4 px-8 sticky top-0 shadow-md z-50">
      <div className="relative max-w-page m-auto">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">
            <Image src="/cdc-logo.png" width={48} height={48} />
          </Link>
          <div className="flex items-center justify-end">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/groups">Groups</HeaderLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
