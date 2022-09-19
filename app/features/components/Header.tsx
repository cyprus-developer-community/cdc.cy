import React from 'react'
import type { NavLinkProps } from '@remix-run/react'
import { NavLink, Link } from '@remix-run/react'
import { Image } from 'remix-image'
import { useScroll } from '~/features/hooks'

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
  const { y } = useScroll()
  const shouldAddExtraPadding = y > 80

  return (
    <header className="sticky top-0 bg-slate-50 py-4 px-8 shadow-md z-50">
      <div
        className={`relative max-w-page m-auto transition-all duration-500 ${
          shouldAddExtraPadding ? 'py-8 px-16' : 'py-0 px-0'
        }`}
      >
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">
            <Image src="/cdc-logo.svg" width={48} height={48} />
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
