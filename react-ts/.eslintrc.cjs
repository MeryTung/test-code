module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // indent: 'off',
    // '@typescript-eslint/indent': ['error', 2],
    // quotes: 'off',
    // '@typescript-eslint/quotes': ['error', 'single'],
    // semi: 'off',
    // '@typescript-eslint/semi': ['error'],
    // '@typescript-eslint/consistent-type-assertions': 'warn',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
