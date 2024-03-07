import { defineConfig } from '@solidjs/start/config'
import tailwindcss from 'tailwindcss'
import { config } from 'vinxi/plugins/config'

export default defineConfig({
  appRoot: 'src',
  islands: false,
  server: {
    preset: 'cloudflare_module',
    rollupConfig: {
      external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks']
    },
    prerender: {
      routes: ['/']
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
