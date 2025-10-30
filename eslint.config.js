import js from '@eslint/js'
import solid from 'eslint-plugin-solid'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      solid
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        Image: 'readonly'
      }
    },
    rules: {
      ...solid.configs.recommended.rules
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.output/**',
      '.solid/**',
      '.astro/**',
      'build/**',
      'public/build/**'
    ]
  }
]
