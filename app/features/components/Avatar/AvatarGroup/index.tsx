type AvatarGroupProps = React.HTMLAttributes<HTMLUListElement>

export const AvatarGroup = ({ children, ...rest }: AvatarGroupProps) => {
  return (
    <ul className="flex flex-wrap justify-center lg:justify-start" {...rest}>
      {children}
    </ul>
  )
}
