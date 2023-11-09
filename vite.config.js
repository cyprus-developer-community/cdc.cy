import { defineConfig } from 'vite'
import solid from 'solid-start/vite'
import devtools from 'solid-devtools/vite'
import solidSvg from 'vite-plugin-solid-svg'
// import cloudflare from 'solid-start-cloudflare-workers'
import cloudflare from 'solid-start-cloudflare-pages'

export default defineConfig({
  plugins: [
    devtools({
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true
      },
      autoname: true // e.g. enable autoname
    }),
    solid({
      adapter: cloudflare({})
    }),
    solidSvg()
  ],
  server: {
    port: 3000
  }
  // build: {
  //   target: 'esnext'
  // }
})
