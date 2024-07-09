export default {
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': null,
    'color-function-notation': null,
    'comment-empty-line-before': ['always', {ignore: ['after-comment']}],
    'declaration-block-no-duplicate-properties': [
      true,
      {ignore: ['consecutive-duplicates-with-different-syntaxes']},
    ],
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': [
      'always',
      {
        except: 'after-declaration',
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
    'function-no-unknown': [true, {ignoreFunctions: ['theme', 'map_get', 'v-bind']}],
    'keyframes-name-pattern': null,
    'length-zero-no-unit': [true, {ignore: ['custom-properties'], severity: 'warning'}],
    'no-descending-specificity': null,
    'rule-empty-line-before': [
      'always',
      {except: ['first-nested'], ignore: ['after-comment'], severity: 'warning'},
    ],
    'selector-class-pattern': null,
    'selector-not-notation': null,
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['input-placeholder']}],
    'unit-no-unknown': true,
  },
};
