import React from 'react'
import type { NavLinkProps } from '@remix-run/react'
import { NavLink, Link } from '@remix-run/react'

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
    <header className="py-4 px-8 lg:px-16 bg-neutral-100 sticky top-0 shadow-md z-50 ">
      <div className="bg-transparent relative bg-white max-w-page m-auto">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">
            <img
              src="/cdc-logo.png"
              className="w-16 h-16"
              title="Cyprus Developer Community"
              alt="Cyprus Developer Community"
            />
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
