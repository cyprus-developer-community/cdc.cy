import { defineConfig } from '@solidjs/start/config'
import tailwindcss from 'tailwindcss'
import { config } from 'vinxi/plugins/config'

export default defineConfig({
  appRoot: 'src',
  islands: false,
  server: {
    preset: 'cloudflare-pages',
    rollupConfig: {
      external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks']
    },
    prerender: {
      crawlLinks: true
    }
  },
  vite: {
    optimizeDeps: {
      entries: []
    },
    plugins: [
      config('tailwind', {
        css: {
          postcss: {
            plugins: [tailwindcss]
          }
        }
      })
    ]
  }
})
