// import { defineConfig } from 'windicss/helpers'
// import formPlugin from 'windicss/plugin/forms'
// import typoPlugin from 'windicss/plugin/typography'

// const { defineConfig } = require('windicss/helpers')
const formPlugin = require('windicss/plugin/forms')
const typoPlugin = require('windicss/plugin/typography')

module.exports = {
  safelist: 'active',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['Doppio One', 'sans-serif']
    }
  },
  plugins: [formPlugin, typoPlugin]
}
