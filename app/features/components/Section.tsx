type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingProps = {
  level: HeadingLevel
  title: string
}
const Heading: React.FC<HeadingProps> = ({ level, title }) => {
  const defaultStyles = 'text-gray-900 text-center sm:tracking-tight'

  switch (level) {
    case 'h1': {
      return (
        <h1 className={`${defaultStyles} text-4xl sm:text-5xl lg:text-6xl`}>
          {title}
        </h1>
      )
    }
    case 'h2': {
      return (
        <h2
          className={`${defaultStyles} md:text-left text-3xl sm:text-4xl lg:text-5xl`}
        >
          {title}
        </h2>
      )
    }
    default: {
      return (
        <h3
          className={`${defaultStyles} md:text-left text-2xl sm:text-3xl lg:text-4xl`}
        >
          {title}
        </h3>
      )
    }
  }
}

type SectionProps = {
  title: string
  level?: HeadingLevel
  children?: React.ReactNode
  sectionClass?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  level = 'h3',
  children,
  sectionClass = ''
}) => {
  return (
    <section className={`grid gap-4 ${sectionClass}`}>
      <Heading title={title} level={level} />
      {children}
    </section>
  )
}
