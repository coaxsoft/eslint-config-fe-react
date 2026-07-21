import tseslint from 'typescript-eslint';

import base from './base.js';

const typescript = [
  ...base,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: '@coaxsoft/eslint-config-fe-react/typescript/overrides',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/array-type': ['warn', { default: 'generic' }],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'semi', requireLast: true },
          singleline: { delimiter: 'semi', requireLast: false },
        },
      ],
    },
  },
];

export default typescript;
