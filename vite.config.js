import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import solidSvg from 'vite-plugin-solid-svg'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS(), solidSvg()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  }
})
