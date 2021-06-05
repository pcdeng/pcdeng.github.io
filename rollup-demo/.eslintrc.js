module.exports = {
  env: {
    browser: true,
    node: false,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  rules: {},
};
