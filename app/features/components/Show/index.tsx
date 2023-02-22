export type ShowProps = {
  show: boolean
  children: React.ReactNode
}

export const Show = ({ show, children }: ShowProps) => {
  if (!show) {
    return null
  }

  return <div className="transition duration-500">{children}</div>
}
