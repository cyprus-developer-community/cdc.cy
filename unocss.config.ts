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
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827'
}
const colors = {
  primary,
  secondary
}

const globalOverrides = ({
  theme
}: PreflightContext<{ colors: typeof colors }>) => `
a:focus-visible {
  outline-color: ${theme.colors.primary[200]};
  outline-width: 3px;
  outline-style: solid;
  border-radius: 0.15rem;
}
`

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  rules: [
    ['group-card', { display: 'grid', 'grid-template-rows': '225px 1fr' }]
  ],
  theme: {
    fontFamily: {
      sans: 'sans-serif'
    },
    colors
  },
  preflights: [
    {
      getCSS: globalOverrides
    }
  ]
})
