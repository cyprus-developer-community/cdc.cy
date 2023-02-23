type AvatarGroupProps = React.HTMLAttributes<HTMLUListElement>

export const AvatarGroup = ({
  children,
  className = '',
  ...rest
}: AvatarGroupProps) => {
  return (
    <ul
      className={`flex flex-wrap justify-center lg:justify-start ${className}`}
      {...rest}
    >
      {children}
    </ul>
  )
}
