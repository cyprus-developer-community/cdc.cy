export type H1Props = React.HTMLAttributes<HTMLHeadingElement>

export const H1 = ({ children, ...rest }: H1Props) => {
  return (
    <h1 className="page-title" {...rest}>
      {children}
    </h1>
  )
}
