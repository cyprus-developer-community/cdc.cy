import React from 'react'
import { calcIsReactElement } from '../../misc/calcIsReactElement'
import type { AvatarLink, AvatarLinkProps } from '../AvatarLink'

export type AvatarItemProps = React.LiHTMLAttributes<HTMLLIElement>

export const AvatarItem = ({ children, ...rest }: AvatarItemProps) => {
  const isAvatarLink = calcIsReactElement<AvatarLinkProps, typeof AvatarLink>(
    children,
    'AvatarLink'
  )

  if (isAvatarLink) {
    return (
      <li className="relative" {...rest}>
        {React.cloneElement(children, {
          className:
            'outline-link hover:before:rounded-full focus:before:rounded-full'
        })}
      </li>
    )
  }

  return <li {...rest}>{children}</li>
}
