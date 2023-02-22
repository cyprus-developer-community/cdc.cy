import React from 'react'
import { calcIsAvatarLink } from '../AvatarLink/calcIsAvatarLink'
export type AvatarItemProps = React.LiHTMLAttributes<HTMLLIElement>

export const AvatarItem = ({ children, ...rest }: AvatarItemProps) => {
  const isAvatarLink = calcIsAvatarLink(children)

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
