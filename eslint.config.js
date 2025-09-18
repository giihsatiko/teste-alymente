const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules/*'],
    plugins: ['prettier'],
    extends: ['prettier'],
    rules: {
      'prettier/prettier': ['error'],
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'prefer-const': [
        'error',
        { destructuring: 'all', ignoreReadBeforeAssign: true },
      ],
      semi: ['error', 'always'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
    },
  },
]);
