import nextPlugin from '@next/eslint-plugin-next';

import typescript from './typescript.js';

const next = [
  ...typescript,
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
