import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import unoStylesheetUrl from './styles/uno.css'
import resetStylesheetUrl from '@unocss/reset/tailwind.css'
import { MainLayout } from '~/features/components'

export const links = () => [
  { rel: 'stylesheet', href: unoStylesheetUrl },
  { rel: 'stylesheet', href: resetStylesheetUrl }
]

export const meta = () => ({
  charset: 'utf-8',
  title: 'Cyprus Developer Community | CDC.cy',
  viewport: 'width=device-width,initial-scale=1'
})

const isServer = typeof window === 'undefined'

if (isServer && process?.env?.MOCKS_ENABLED === 'true') {
  // For debugging purposes, you can update the strategy to 'warn'
  import('./mocks').then(({ server }) => {
    return server.listen({ onUnhandledRequest: 'bypass' })
  })
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Links />
        <script async defer src="https://sa.cdc.cy/latest.js"></script>
        <noscript>
          <img
            src="https://sa.cdc.cy/noscript.gif"
            alt="noscript"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '19898');
        `
          }}
        />
      </head>
      <body className="antialiased font-sans bg-white m-0">
        <MainLayout>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
