import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: false,
    environment: 'happy-dom',
    etupFiles: ['./test/setup-test-env.js']
  }
})
