import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import js from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";

const base = [
  {
    name: "@coaxsoft/eslint-config-fe-react/base/language-options",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    ...js.configs.recommended,
    name: "@coaxsoft/eslint-config-fe-react/base/recommended"
  },
  {
    ...stylistic.configs.recommended,
    name: "@coaxsoft/eslint-config-fe-react/base/stylistic-recommended"
  },
  {
    name: "@coaxsoft/eslint-config-fe-react/base/rules",
    plugins: {
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      // General JS rules
      "prefer-const": "warn",
      "array-callback-return": "error",
      "block-scoped-var": "error",
      "consistent-this": "error",
      "curly": ["error", "multi-line"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "dot-notation": "warn",
      "eqeqeq": "error",
      "for-direction": "error",
      "guard-for-in": "warn",
      "id-denylist": "error",
      "init-declarations": "warn",
      "max-depth": ["error", 4],
      "max-nested-callbacks": ["error", 4],
      "max-params": ["error", 5],
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
      "no-multi-assign": "error",
      "no-multi-str": "warn",
      "no-global-assign": "error",
      "no-proto": "error",
      "no-prototype-builtins": "off",
      "no-restricted-globals": "error",
      "no-restricted-imports": "error",
      "no-restricted-properties": "error",
      "no-restricted-syntax": "error",
      "no-return-await": "warn",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-template-curly-in-string": "error",
      "no-undef-init": "warn",
      "no-undefined": "warn",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-use-before-define": [
        "warn",
        {
          functions: false
        }
      ],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-with": "error",
      "prefer-promise-reject-errors": "warn",
      "prefer-rest-params": "error",
      "prefer-template": "warn",
      "radix": "warn",
      "symbol-description": "error",
      "unicode-bom": ["error", "never"],
      "vars-on-top": "error",
      "yoda": "error",
      "class-methods-use-this": "off",

      // Formatting rules
      "@stylistic/quotes": ["warn", "single", { avoidEscape: true }],
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      "@stylistic/arrow-spacing": "error",
      "@stylistic/block-spacing": "warn",
      "@stylistic/comma-spacing": [
        "error",
        { after: true, before: false }
      ],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/computed-property-spacing": "warn",
      "@stylistic/function-call-spacing": "error",
      "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
      "@stylistic/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
          ignoredNodes: ["TemplateLiteral"]
        }
      ],
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      "@stylistic/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "ignore",
          propElementValues: "always"
        }
      ],
      "@stylistic/key-spacing": [
        "warn",
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      "@stylistic/keyword-spacing": [
        "error",
        {
          before: true,
          after: true
        }
      ],
      "@stylistic/lines-around-comment": "warn",
      "@stylistic/lines-between-class-members": ["warn", "always"],
      "@stylistic/max-len": [
        "error",
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        }
      ],
      "@stylistic/max-statements-per-line": ["error", { max: 1 }],
      "@stylistic/padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "any", prev: "directive", next: "directive" }
      ],
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        { max: 2, maxEOF: 1 }
      ],
      "@stylistic/no-tabs": "error",
      "@stylistic/no-trailing-spaces": [
        "warn",
        { skipBlankLines: true }
      ],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/one-var-declaration-per-line": "warn",
      "@stylistic/operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            "?": "ignore",
            ":": "ignore"
          }
        }
      ],
      "@stylistic/semi-spacing": "error",
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-unary-ops": "error",
      "@stylistic/switch-colon-spacing": "error",
      "@stylistic/template-tag-spacing": ["error", "always"],
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/wrap-iife": ["error", "outside"],
      "@stylistic/yield-star-spacing": "error",

      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Side effect imports (e.g. `import "./polyfills"`)
            ["^\\u0000"],
            // Node.js builtins, npm packages and scoped packages
            ["^node:", "^[a-z]", "^@[a-z]"],
            // Own code: internal aliases and relative imports
            ["^@/", "^~/", "^\\."]
          ]
        }
      ],
      "simple-import-sort/exports": "warn"
    }
  },
  {
    ...eslintReact.configs.recommended,
    name: "@coaxsoft/eslint-config-fe-react/base/react",
    files: ["**/*.{js,jsx,ts,tsx}"]
  },
  {
    ...reactHooks.configs.flat.recommended,
    name: "@coaxsoft/eslint-config-fe-react/base/react-hooks",
    files: ["**/*.{js,jsx,ts,tsx}"]
  },
  {
    ...eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
    name: "@coaxsoft/eslint-config-fe-react/base/react-hooks-conflicts",
    files: ["**/*.{js,jsx,ts,tsx}"]
  }
];

export default base;
