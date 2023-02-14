import { BreadcrumbProvider } from '../Provider'

export type BreadcrumbsProps = {
  children: React.ReactNode
  separator?: string | React.ReactNode
  spacing?: number
  className?: string
}

export const Breadcrumbs = ({
  children,
  separator = '/',
  spacing = 3,
  className = ''
}: BreadcrumbsProps) => {
  return (
    <BreadcrumbProvider separator={separator} spacing={spacing}>
      <nav
        className={`text-primary-500 font-light text-lg ${className}`}
        aria-label="breadcrumb"
      >
        <ol className="flex wrap">{children}</ol>
      </nav>
    </BreadcrumbProvider>
  )
}
