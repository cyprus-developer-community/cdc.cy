import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import formPlugin from 'windicss/plugin/forms'
import typoPlugin from 'windicss/plugin/typography'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Doppio One', 'sans-serif']
    }
  },
  plugins: [formPlugin, typoPlugin]
})
