module.exports = {
  extends: [
    // for js stardand
    // 'airbnb-base',
    // 'prettier',

    // for react
    'eslint-config-developit'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'comma-style': 'off',
    'semi': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-no-bind': 'off',
    'react/sort-comp': 'off',
    'no-alert': 'off',
    'indent': ['error', 'tab']
  }
};
