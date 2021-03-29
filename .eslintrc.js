module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: true,
        singleQuote: true,
        semi: true,
        endOfLine: 'auto',
      },
    ],
    'no-console': 0,
    // 'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
