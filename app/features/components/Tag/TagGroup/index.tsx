type TagGroupProps = React.HTMLAttributes<HTMLUListElement>

export const TagGroup = ({ children, ...rest }: TagGroupProps) => {
  return (
    <ul className="flex gap-2" {...rest}>
      {children}
    </ul>
  )
}
