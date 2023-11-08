// @refresh reload
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from 'solid-start'
import './root.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function Root() {
  return (
    <Html lang="en" class="h-full antialiased">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="h-full bg-zinc-50 dark:bg-black">
        <Suspense>
          <ErrorBoundary>
            <div class="relative flex w-full flex-col">
              <Header />
              <main class="flex-auto">
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
