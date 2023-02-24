type PageProps = React.HTMLAttributes<HTMLElement>

export const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <article className={`page ${className}`} {...rest}>
      {children}
    </article>
  )
}
