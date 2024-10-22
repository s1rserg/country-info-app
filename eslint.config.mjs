export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      eqeqeq: ['error', 'always'],
      curly: 'error',
    },
  },
];
