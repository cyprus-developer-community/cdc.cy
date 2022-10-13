/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'prettier',
    'plugin:markdown/recommended',
    'plugin:json/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
