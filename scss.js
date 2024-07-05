export default {
  extends: ['stylelint-config-standard-scss', './basic.js'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'scss/at-rule-no-unknown': null,
    'scss/operator-no-unspaced': null,
    'scss/no-global-function-names': null,
  },
};
