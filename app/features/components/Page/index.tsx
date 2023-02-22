type PageProps = React.HTMLAttributes<HTMLElement>

export const Page = ({ children, ...rest }: PageProps) => {
  return (
    <article className="page" {...rest}>
      {children}
    </article>
  )
}
