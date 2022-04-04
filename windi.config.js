import { defineConfig } from 'windicss/helpers'
import formPlugin from 'windicss/plugin/forms'
import typoPlugin from 'windicss/plugin/typography'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Doppio One', 'sans-serif']
    }
  },
  extract: {
    include: ['app/**/*.{html,jsx,js}'],
    exclude: ['node_modules', '.git']
  },
  plugins: [formPlugin, typoPlugin]
})
