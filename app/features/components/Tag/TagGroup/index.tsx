import React from 'react'
import type { Tag, TagProps } from '../Tag'
import { calcIsReactElement } from '../../misc/calcIsReactElement'

type TagGroupProps = React.HTMLAttributes<HTMLUListElement>

export const TagGroup = ({
  children,
  className = '',
  ...rest
}: TagGroupProps) => {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} {...rest}>
      {React.Children.map(children, (children) => {
        const isTag = calcIsReactElement<TagProps, typeof Tag>(children, 'Tag')
        if (!isTag) {
          return null
        }

        return <li key={JSON.stringify(children.props.children)}>{children}</li>
      })}
    </ul>
  )
}
