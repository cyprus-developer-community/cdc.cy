/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

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
      gridTemplateRows: {
        card: '225px 1fr'
      }
    }
  },
  plugins: []
}
