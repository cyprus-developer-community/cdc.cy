import { Header } from '../Header'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="py-8 lg:py-16 m-auto max-w-screen-xl px-8">
        {children}
      </main>
    </div>
  )
}
