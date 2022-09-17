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

module.exports = {
  safelist: 'active',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif']
    },
    extend: {
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
