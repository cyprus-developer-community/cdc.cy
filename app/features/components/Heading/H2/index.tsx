export type H2Props = React.HTMLAttributes<HTMLHeadingElement>

export const H2 = ({ children, className = '', ...rest }: H2Props) => {
  return (
    <h2
      className={`text-3xl lg:text-4xl text-center lg:text-left font-extrabold sm:tracking-tight text-primary-gradient ${className}`}
      {...rest}
    >
      {children}
    </h2>
  )
}
