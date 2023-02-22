import { defineConfig, presetUno, presetTypography } from 'unocss'
import type { PreflightContext } from 'unocss'

const primary = {
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
}
const secondary = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923'
}
const colors = {
  primary,
  secondary
}

const globalOverrides = ({
  theme
}: PreflightContext<{ colors: typeof colors }>) => `
a:focus-visible,a:focus {
  outline-color: ${theme.colors.primary[200]};
  outline-width: 3px;
  outline-style: solid;
  border-radius: 0.15rem;
}
a:hover {
  color: ${theme.colors.primary[900]}
}
`

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  rules: [
    ['group-card', { display: 'grid', 'grid-template-rows': '225px 1fr' }],
    ['content-empty', { content: '""' }]
  ],
  shortcuts: {
    'text-primary-gradient':
      'bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-900',
    page: 'grid gap-8 max-w-screen-xl mx-auto',
    'page-title':
      'text-4xl lg:text-6xl font-extrabold text-center text-primary-gradient mt-8 mb-8',
    'card-link':
      'focus:outline-none hover:outline-none focus:outline-transparent before:content-empty before:absolute before:inset-0 before:rounded-lg before:outline-transparent before:outline before:outline-3 hover:cursor-pointer hover:before:outline-primary-400 focus:before:outline-primary-400 focus:before:cursor-pointer hover:before:cursor-pointer',
    'outline-link':
      'rounded-lg outline-transparent outline outline-3 hover:outline-primary-400 focus:outline-primary-400 hover:text-secondary-600'
  },
  theme: {
    fontFamily: {
      sans: 'sans-serif'
    },
    colors,
    width: {
      sm: '2.5rem',
      md: '3rem',
      lg: '3.5rem'
    },
    height: {
      sm: '2.5rem',
      md: '3rem',
      lg: '3.5rem'
    }
  },
  preflights: [
    {
      getCSS: globalOverrides
    }
  ]
})
