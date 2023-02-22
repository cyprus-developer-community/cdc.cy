type SectionProps = React.HTMLAttributes<HTMLElement>

export const Section = ({ children, ...rest }: SectionProps) => {
  return (
    <section className="grid gap-4" {...rest}>
      {children}
    </section>
  )
}
