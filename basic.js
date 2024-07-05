export default {
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': null,
    'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'after-declaration', 'first-nested'],
      },
    ],
    'function-no-unknown': [true, {ignoreFunctions: ['theme', 'map_get', 'v-bind']}],
    'keyframes-name-pattern': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-not-notation': null,
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['input-placeholder']}],
    '@stylistic/declaration-colon-newline-after': null,
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/string-quotes': null,
  },
};
