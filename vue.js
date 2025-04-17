export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue', './basic.js', './stylistic.js'],
  rules: {
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['input-placeholder', 'deep']}],
  },
};
