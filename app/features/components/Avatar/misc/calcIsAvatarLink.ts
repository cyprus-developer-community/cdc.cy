import React from 'react'
import type { AvatarLinkProps } from '../AvatarLink'
import type { AvatarLink } from '../AvatarLink'

export const calcIsAvatarLink = (
  node: React.ReactNode
): node is React.ReactElement<AvatarLinkProps, typeof AvatarLink> => {
  if (!React.isValidElement(node)) {
    return false
  }
  if (typeof node.type === 'string') {
    return false
  }

  return Boolean(node.type.name === 'AvatarLink')
}
