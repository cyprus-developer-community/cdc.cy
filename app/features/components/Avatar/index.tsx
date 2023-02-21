type AvatarProps = {
  name: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Avatar = ({ name, className = '', ...rest }: AvatarProps) => {
  return (
    <img
      {...rest}
      alt={name}
      className={`rounded-full object-cover object-center shadow-md w-10 h-10 ${className}`}
    ></img>
  )
}
