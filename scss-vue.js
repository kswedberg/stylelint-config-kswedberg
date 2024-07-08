export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', './basic.js', './stylistic.js'],
  rules: {
    'scss/at-rule-no-unknown': null,
    'scss/operator-no-unspaced': null,
    'scss/no-global-function-names': null,
  },
};
