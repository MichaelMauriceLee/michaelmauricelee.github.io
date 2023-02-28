module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'plugin:react/recommended',
    'prettier',
    require('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
