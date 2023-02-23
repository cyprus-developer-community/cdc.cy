export type H1Props = React.HTMLAttributes<HTMLHeadingElement>

export const H1 = ({ children, className = '', ...rest }: H1Props) => {
  return (
    <h1 className={`page-title ${className}`} {...rest}>
      {children}
    </h1>
  )
}
