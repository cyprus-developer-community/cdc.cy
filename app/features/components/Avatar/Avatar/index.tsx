export type AvatarProps = {
  name: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Avatar = ({
  name,
  className = 'w-sm h-sm',
  ...rest
}: AvatarProps) => {
  return (
    <img
      {...rest}
      alt={name}
      className={`rounded-full object-cover object-center shadow-md ${className}`}
    ></img>
  )
}
