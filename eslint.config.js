import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactCompiler from 'eslint-plugin-react-compiler';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },

  // Base JS/TS config
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React config
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/prop-types': 'off', // Not needed with TypeScript

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Compiler rules
      'react-compiler/react-compiler': 'error',

      // Accessibility rules
      ...jsxA11y.configs.recommended.rules,

      // TypeScript specific
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Astro config
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  // Prettier (must be last to override other formatting rules)
  eslintConfigPrettier
);





