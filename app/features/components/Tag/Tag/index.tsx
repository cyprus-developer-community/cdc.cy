export type TagProps = React.LiHTMLAttributes<HTMLLIElement>

export const Tag = ({ children, color, className = '' }: TagProps) => {
  return (
    <span
      className={`tracking-wide bg-secondary-50 text-secondary-500 px-2 py-2 rounded-lg shadow-sm text-xs ${className} h-max`}
      color={color}
    >
      {children}
    </span>
  )
}
