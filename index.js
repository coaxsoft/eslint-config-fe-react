module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {},
  "rules": {
    "prefer-const": "warn",
    "quotes": ["warn", "double"],
    "array-bracket-spacing": ["warn", "never"],
    "array-callback-return": "error",
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "warn",
    "comma-spacing": [
      "error",
      { "after": true, "before": false }
    ],
    "comma-style": ["error", "last"],
    "computed-property-spacing": "warn",
    "consistent-this": "error",
    "curly": [
      "error",
      "multi-line"
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "dot-notation": "warn",
    "eqeqeq": "error",
    "for-direction": "error",
    "func-call-spacing": "error",
    "global-require": "warn",
    "guard-for-in": "warn",
    "handle-callback-err": "warn",
    "id-blacklist": "error",
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": ["TemplateLiteral"]
      }
    ],
    "init-declarations": "warn",
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "key-spacing": [
      "warn",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "lines-around-comment": "warn",
    "lines-around-directive": "error",
    "lines-between-class-members": [
      "warn",
      "always"
    ],
    "max-depth": ["error", 4],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "max-nested-callbacks": ["error", 4],
    "max-params": ["error", 5],
    "max-statements-per-line": ["error", { "max": 1 }],
    "newline-before-return": "warn",
    "no-array-constructor": "error",
    "no-await-in-loop": "warn",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-labels": "error",
    "no-lone-blocks": "warn",
    "no-lonely-if": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-multiple-empty-lines": [
      "error",
      { "max": 2, "maxEOF": 1 }
    ],
    "no-native-reassign": "error",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-await": "warn",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "warn",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-trailing-spaces": [
      "warn",
      { "skipBlankLines": true }
    ],
    "no-undef-init": "warn",
    "no-undefined": "warn",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-use-before-define": [
      "warn",
      {
        "functions": false
      }
    ],
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var-declaration-per-line": "warn",
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": {
          "?": "ignore",
          ":": "ignore"
        }
      }
    ],
    "prefer-promise-reject-errors": "warn",
    "prefer-rest-params": "error",
    "prefer-template": "warn",
    "radix": "warn",
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-tag-spacing": [
      "error",
      "always"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "outside"
    ],
    "yield-star-spacing": "error",
    "yoda": "error",
    "class-methods-use-this": "off",
    "react/no-unescaped-entities": "off",
    "react/no-string-refs": "off"
  },
};
