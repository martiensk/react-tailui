module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:regexp/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    'react-refresh',
    'jsdoc',
    'regexp'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // ERRORS
    'for-direction': 'error',
    'getter-return': 'error',
    'no-await-in-loop': 'error',
    'no-empty': [
      'error',
      { allowEmptyCatch: true }
    ],
    'no-empty-function': [
      'error',
      { allow: ['constructors'] }
    ],
    'no-prototype-builtins': 'error',
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: false
      }
    ],
    'block-scoped-var': 'error',
    curly: ['error', 'multi'],
    'class-methods-use-this': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    quotes: ['error', 'single', 'avoid-escape'],
    'require-await': 'error',
    'no-shadow': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'linebreak-style': 'off',
    'func-style': [
      'error',
      'expression',
      { allowArrowFunctions: true }
    ],
    'function-paren-newline': ['error', 'never'],
    'implicit-arrow-linebreak': ['error'],
    indent: ['error', 2],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        allowBlockStart: true
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'no-lonely-if': 'error',
    'no-underscore-dangle': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'operator-linebreak': ['error', 'none'],
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'switch-colon-spacing': ['error'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['warn', 'always'],
    'no-duplicate-imports': 'error',
    'no-obj-calls': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true
      }
    ],
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 6],
    'max-depth': ['error', 8],
    complexity: ['error', 10],
    'new-cap': ['error', { 
      newIsCap: true, 
      capIsNew: false,
      newIsCapExceptions: ['timeline'] 
    }],
    // WARNINGS
    'default-case': 'warn',
    'no-console': [
      'warn',
      { allow: ['warn', 'error'] }
    ],
    'no-func-assign': 'warn',
    'no-inner-declarations': ['warn', 'both'],
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'dot-notation': 'warn',
    'no-magic-numbers': 'off',
    'no-warning-comments': 'off',
    'vars-on-top': 'warn',
    'multiline-comment-style': 'off',
    'no-var': 'warn',
    'prefer-rest-params': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'spaced-comment': ['warn', 'always', {
      markers: ['#region', '#endregion']
    }],
    camelcase: ['warn', {
      allow: ['$async_t', '$async_tType', 'v_hydrate'],
      properties: 'never'
    }],
    // JSDOC
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: true,
          FunctionExpression: false
        }
      }
    ],
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          constructor: 'class',
          return: 'returns',
          virtual: 'abstract'
        },
        preferType: {
          Object: 'object'
        }
      }
    ],
    // ALLOW
    'no-useless-constructor': 'off',
    'no-new': 'off',
    'no-unused-vars': 'off',
    'unicode-bom': 'off',
    'no-unmodified-loop-condition': 'off',
    // Regex
    'regexp/no-unused-capturing-group': ['error', { fixable: true }],
    'regexp/no-dupe-disjunctions': [
      'error',
      {
        report: 'trivial',
        reportExponentialBacktracking: 'potential',
        reportUnreachable: 'certain'
      }
    ],
  },
};
