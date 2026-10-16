import globals from 'globals';
import nextPlugin from '@next/eslint-plugin-next';

import typescript from './typescript.js';

const next = [
  {
    name: '@coaxsoft/eslint-config-fe-react/next/ignores',
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...typescript,
  {
    // Next.js code runs on the server too, and `process.env` is inlined in client code.
    name: '@coaxsoft/eslint-config-fe-react/next/globals',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ...nextPlugin.configs.recommended,
    name: '@coaxsoft/eslint-config-fe-react/next/recommended',
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    ...nextPlugin.configs['core-web-vitals'],
    name: '@coaxsoft/eslint-config-fe-react/next/core-web-vitals',
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];

export default next;
