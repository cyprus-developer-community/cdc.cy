import { Html, Head, Meta } from '@solidjs/meta'

export default function Root() {
  return (
    <Html lang="en" class="h-full antialiased">
      <Head>
        <Meta
          name="twitter:image:src"
          content="https://opengraph.githubassets.com/a062ab265117a44e5479396add57906d85de72b4dd278127be810c33e00768cf/solidjs/solid-docs-next"
        />
        <Meta name="twitter:site" content="@github" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta
          name="twitter:title"
          content="solid-docs-next/md.tsx at tutorial-revision · solidjs/solid-docs-next"
        />
        <Meta
          name="twitter:description"
          content="Solid Docs, rehauled. Very much in progress. Contribute to solidjs/solid-docs-next development by creating an account on GitHub."
        />
        <Meta
          property="og:image"
          content="https://opengraph.githubassets.com/a062ab265117a44e5479396add57906d85de72b4dd278127be810c33e00768cf/solidjs/solid-docs-next"
        />
        <Meta
          property="og:image:alt"
          content="Solid Docs, rehauled. Very much in progress. Contribute to solidjs/solid-docs-next development by creating an account on GitHub."
        />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="600" />
        <Meta property="og:site_name" content="GitHub" />
      </Head>
    </Html>
  )
}
