// @refresh reload
import { Show, Suspense } from 'solid-js'
import {
  A,
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
import announcementQuery from '~/graphql/announcement.query.js'
import graphql from '~/lib/graphql.server.js'
import { createMemo } from 'solid-js'

const destructBody = (body) => {
  const urlRegex = new RegExp(/(((https?:\/\/)|(www\.))[^\s]+)/g)

  const [content, link] = body.split('\r\n\r\n')
  const [text] = link.split(':')
  const href = link.match(urlRegex)[0]

  return {
    content: content,
    linkText: text,
    linkHref: href
  }
}

function Announcement(props) {
  const announcement = createMemo(() =>
    destructBody(props?.data?.repository?.discussions.nodes[0].body)
  )

  return (
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            'clip-path':
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
          }}
        />
      </div>
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            'clip-path':
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
          }}
        />
      </div>
      <p class="text-sm leading-6 text-gray-900">
        {announcement()?.content}&nbsp;
        <A
          href={announcement()?.linkHref}
          class="whitespace-nowrap font-semibold"
        >
          {announcement()?.linkText}&nbsp;<span aria-hidden="true">&rarr;</span>
        </A>
      </p>
      <div class="flex flex-1 justify-end" />
    </div>
  )
}

export default function Root() {
  const [data] = graphql(announcementQuery.gql, announcementQuery.vars)

  return (
    <Html lang="en" class="h-full antialiased">
      <Head>
        <Title>Cyprus Developer Community - Home</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="h-full bg-zinc-50 dark:bg-black">
        <Suspense>
          <ErrorBoundary>
            <Show when={data()?.repository?.discussions.nodes[0].body}>
              <Announcement data={data()} />
            </Show>
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
