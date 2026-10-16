import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { ESLint } from 'eslint';

import base from '../base.js';
import index from '../index.js';
import next from '../next.js';
import typescript from '../typescript.js';

const configs = { base, index, typescript, next };

function createESLint(config) {
  return new ESLint({ overrideConfigFile: true, overrideConfig: config });
}

async function lint(config, filePath, code) {
  const [result] = await createESLint(config).lintText(code, { filePath });

  return result;
}

function ruleIds(result) {
  return result.messages.map(message => message.ruleId);
}

function assertClean(result) {
  assert.deepEqual(
    result.messages.map(message => `${message.ruleId}: ${message.message}`),
    [],
    `${result.filePath} should have no problems`,
  );
}

const component = `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
`;

const typedComponent = `import { useState } from 'react';

export function Field(): React.JSX.Element {
  const [value] = useState<string | undefined>(undefined);

  return <p>{value}</p>;
}
`;

const commonjsConfig = `const tailwind = require('tailwindcss');

module.exports = { plugins: [tailwind] };
`;

describe('every entry point', () => {
  for (const [name, config] of Object.entries(configs)) {
    test(`${name} uses no deprecated rules`, async () => {
      const result = await lint(config, 'src/counter.jsx', component);

      assert.deepEqual(result.usedDeprecatedRules, []);
    });

    test(`${name} lints a JSX component without problems`, async () => {
      assertClean(await lint(config, 'src/counter.jsx', component));
    });

    test(`${name} lints CommonJS config files`, async () => {
      assertClean(await lint(config, 'postcss.config.cjs', commonjsConfig));
    });

    test(`${name} reports broken rules of hooks`, async () => {
      const code = `import { useState } from 'react';

export function Broken({ show }) {
  if (show) {
    useState(0);
  }

  return null;
}
`;
      const result = await lint(config, 'src/broken.jsx', code);

      assert.ok(ruleIds(result).includes('@eslint-react/rules-of-hooks'));
    });

    test(`${name} reports reading refs during render`, async () => {
      const code = `import { useRef } from 'react';

export function Ref() {
  const ref = useRef(0);

  return <p>{ref.current}</p>;
}
`;
      const result = await lint(config, 'src/ref.jsx', code);

      assert.deepEqual(ruleIds(result), ['react-hooks/refs']);
    });
  }
});

describe('base', () => {
  test('reports Node.js and test globals in browser source files', async () => {
    const code = 'export const api = process.env.API_URL;\nexport const run = describe;\n';
    const result = await lint(base, 'src/env.js', code);

    assert.deepEqual(ruleIds(result), ['no-undef', 'no-undef']);
  });

  test('allows Node.js globals in config files and scripts', async () => {
    const code = 'export default { root: process.cwd(), dir: import.meta.dirname };\n';

    assertClean(await lint(base, 'vite.config.js', code));
    assertClean(await lint(base, 'scripts/build.js', code));
  });

  test('allows test globals in test files', async () => {
    const code = `describe('sum', () => {
  it('adds', () => {
    expect(process.env.CI).toBeDefined();
    vi.fn();
  });
});
`;

    assertClean(await lint(base, 'src/sum.test.js', code));
    assertClean(await lint(base, 'src/__tests__/sum.js', code));
  });

  test('reports unsorted imports and loose equality', async () => {
    const code = `import b from './b';
import a from 'a';

export const same = a == b;
`;
    const result = await lint(base, 'src/sort.js', code);

    assert.deepEqual(ruleIds(result).sort(), ['eqeqeq', 'simple-import-sort/imports']);
  });
});

describe('typescript', () => {
  test('allows separate type and value imports from one module', async () => {
    const code = `import type { Props } from './props';
import { defaults } from './props';

export const props: Props = defaults;
`;

    assertClean(await lint(typescript, 'src/props.ts', code));
  });

  test('allows explicit undefined', async () => {
    assertClean(await lint(typescript, 'src/field.tsx', typedComponent));
  });

  test('enforces generic array types', async () => {
    const result = await lint(typescript, 'src/list.ts', 'export const list: string[] = [];\n');

    assert.deepEqual(ruleIds(result), ['@typescript-eslint/array-type']);
  });

  test('still reports require() outside CommonJS files', async () => {
    const result = await lint(typescript, 'src/legacy.ts', "export const fs = require('node:fs');\n");

    assert.ok(ruleIds(result).includes('@typescript-eslint/no-require-imports'));
  });
});

describe('next', () => {
  test('ignores build output and next-env.d.ts', async () => {
    const eslint = createESLint(next);
    const ignored = ['.next/server/app/page.js', 'out/index.js', 'build/index.js', 'next-env.d.ts'];
    const results = await Promise.all(ignored.map(filePath => eslint.isPathIgnored(filePath)));

    assert.deepEqual(results, ignored.map(() => true));
    assert.equal(await eslint.isPathIgnored('app/page.tsx'), false);
  });

  test('allows process.env in app code', async () => {
    const code = 'export const api = process.env.NEXT_PUBLIC_API_URL;\n';

    assertClean(await lint(next, 'app/config.js', code));
  });

  test('reports Next.js rules', async () => {
    const code = `export function Logo(): React.JSX.Element {
  return <img src="/logo.png" alt="Logo" />;
}
`;
    const result = await lint(next, 'app/logo.tsx', code);

    assert.deepEqual(ruleIds(result), ['@next/next/no-img-element']);
  });
});
