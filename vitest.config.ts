/// <reference types="vite" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./test/**/*.spec.ts', './test/**/*.spec.tsx'],
    typecheck: {
      tsconfig: './tesconfig.test.json'
    },
    setupFiles: ['./test/setup-test-env.ts'],
    css: false
  }
})
