export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', './basic.js', './stylistic.js'],
  rules: {
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['input-placeholder', 'deep']}],
    'scss/at-rule-no-unknown': null,
    'scss/operator-no-unspaced': null,
    'scss/no-global-function-names': null,
  },
};
