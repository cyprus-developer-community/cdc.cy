import { BreadcrumbProvider } from '../Provider'

export type BreadcrumbsProps = {
  children: React.ReactNode
  separator?: string | React.ReactNode
  spacing?: number
  className?: string
}

export const Breadcrumbs = ({
  children,
  separator = '>',
  spacing = 2,
  className
}: BreadcrumbsProps) => {
  return (
    <BreadcrumbProvider separator={separator}>
      <nav
        className={`text-secondary-500 font-light text-lg ${className}`}
        aria-label="breadcrumb"
      >
        <ol className={`flex wrap gap-x-${spacing}`}>{children}</ol>
      </nav>
    </BreadcrumbProvider>
  )
}
