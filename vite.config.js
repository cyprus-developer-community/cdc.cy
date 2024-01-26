import { defineConfig } from '@solidjs/start/config'
export default defineConfig({
  start: {
    server: {
      preset: 'cloudflare_module',
      rollupConfig: {
        external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks']
      }
    }
  }
})
