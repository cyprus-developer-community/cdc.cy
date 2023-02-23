type SectionProps = React.HTMLAttributes<HTMLElement>

export const Section = ({
  children,
  className = '',
  ...rest
}: SectionProps) => {
  return (
    <section className={`grid gap-4 ${className}`} {...rest}>
      {children}
    </section>
  )
}
