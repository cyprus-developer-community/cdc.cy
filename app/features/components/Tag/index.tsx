import type { HTMLAttributes } from 'react'

export type TagProps = {
  children: React.ReactNode
  color?: React.CSSProperties['color']
  className?: HTMLAttributes<Element>['className']
}

export const Tag = ({ children, color, className }: TagProps) => {
  return (
    <li
      className={`tracking-wide bg-secondary-100 text-secondary-500 px-2 py-2 rounded-sm shadow-sm text-xs ${className}`}
      color={color}
    >
      {children}
    </li>
  )
}
