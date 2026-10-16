import type { Linter } from 'eslint';
import coax from '@coaxsoft/eslint-config-fe-react';
import base from '@coaxsoft/eslint-config-fe-react/base';
import next from '@coaxsoft/eslint-config-fe-react/next';
import typescript from '@coaxsoft/eslint-config-fe-react/typescript';

const configs: Array<Linter.Config> = [...coax, ...base, ...typescript, ...next];

export default configs;
