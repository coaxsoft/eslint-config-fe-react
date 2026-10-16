import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const tsc = require.resolve('typescript/bin/tsc');
const fixture = fileURLToPath(new URL('fixtures/types/consumer.ts', import.meta.url));

function typeCheck(file) {
  try {
    execFileSync(
      process.execPath,
      [tsc, '--noEmit', '--strict', '--module', 'nodenext', file],
      { encoding: 'utf8' },
    );

    return '';
  }
  catch (error) {
    return error.stdout;
  }
}

test('every entry point resolves to typed flat config arrays', () => {
  assert.equal(typeCheck(fixture), '');
});
