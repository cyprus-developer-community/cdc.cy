// import { defineConfig } from 'windicss/helpers'
// import formPlugin from 'windicss/plugin/forms'
// import typoPlugin from 'windicss/plugin/typography'

// const { defineConfig } = require('windicss/helpers')
const formPlugin = require('windicss/plugin/forms')
const typoPlugin = require('windicss/plugin/typography')
const arPlugin = require('windicss/plugin/aspect-ratio')
const filtersPlugin = require('windicss/plugin/filters')
const lcPlugin = require('windicss/plugin/line-clamp')
const scollPlugin = require('windicss/plugin/scroll-snap')
const colors = require('windicss/colors')

module.exports = {
  safelist: 'active',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50: '#02E1A2',
          100: '#06DEA4',
          200: '#0FD6AB',
          300: '#18CDB0',
          400: '#23C3B7',
          500: '#2EB9BD',
          600: '#37B2C3',
          700: '#36B2C3',
          800: '#42A8CA',
          900: '#4BA0D0'
        },
        secondary: colors.gray
      },
      maxWidth: {
        page: '1200px;'
      },
      gridTemplateRows: {
        card: '225px 1fr'
      }
    }
  },
  shortcuts: {},
  plugins: [
    formPlugin,
    typoPlugin,
    arPlugin,
    filtersPlugin,
    lcPlugin,
    scollPlugin
  ]
}
