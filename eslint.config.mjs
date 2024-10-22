export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Use ES modules
      },
      globals: {
        // Define globals as needed
        window: 'readonly', // Browser environment
        document: 'readonly', // Browser environment
        // Add any additional globals here
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-console': 'off', // Allow console statements
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'always'], // Enforce semicolons
      indent: ['error', 2], // Enforce 2-space indentation
      eqeqeq: ['error', 'always'], // Enforce strict equality
      curly: 'error', // Enforce curly braces for all control statements
      // Add more rules as needed
    },
  },
];
