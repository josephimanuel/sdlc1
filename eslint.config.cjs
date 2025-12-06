const security = require('eslint-plugin-security');
const nodePlugin = require('eslint-plugin-node');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
      },
    },
    plugins: {
      security: security,
      node: nodePlugin,
    },
    rules: {
      // Security rules
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-object-injection': 'warn',
      'security/detect-unsafe-regex': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'warn',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-possible-timing-attacks': 'warn',
      'security/detect-pseudoRandomBytes': 'error',
      
      // Node.js best practices
      'node/no-sync': 'warn',
      
      // General rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];