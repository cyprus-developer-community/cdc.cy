import { StartServer, createHandler } from '@solidjs/start/server'

function Document(props) {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta property="og:title" content="Cyprus Developer Community" />
        <meta property="og:site_name" content="Cyprus Developer Community" />
        <meta property="og:url" content="https://cyc.cy" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" property="og:description" content="" />
        <meta name="author" content="Cyprus Developer Community" />
        <link rel="icon" href="/favicon.ico" />
        {props.assets}
      </head>
      <body id="app" class="h-full">
        {props.children}
        {props.scripts}
      </body>
    </html>
  )
}

export default createHandler(() => <StartServer document={Document} />)
