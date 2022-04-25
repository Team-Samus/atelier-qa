module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 0,
    'object-curly-newline': ['error', { ExportDeclaration: { multiline: true, minProperties: 5 } }],
  },
};
