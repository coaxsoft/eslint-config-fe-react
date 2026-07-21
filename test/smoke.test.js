import assert from 'node:assert/strict';
import { test } from 'node:test';

import base from '../base.js';
import index from '../index.js';
import next from '../next.js';
import typescript from '../typescript.js';

function assertFlatConfig(name, config) {
  assert.ok(Array.isArray(config), `${name} must export an array`);
  assert.ok(config.length > 0, `${name} must not be empty`);

  for (const item of config) {
    assert.equal(typeof item, 'object', `${name} entries must be objects`);
    assert.ok(item !== null, `${name} entries must not be null`);
  }
}

test('base is a valid flat config', () => {
  assertFlatConfig('base', base);
});

test('typescript is a valid flat config that extends base', () => {
  assertFlatConfig('typescript', typescript);
  assert.ok(
    typescript.length > base.length,
    'typescript should extend base with extra config entries',
  );
});

test('next is a valid flat config that extends typescript', () => {
  assertFlatConfig('next', next);
  assert.ok(
    next.length > typescript.length,
    'next should extend typescript with extra config entries',
  );
});

test('default export matches typescript', () => {
  assertFlatConfig('index', index);
  assert.deepEqual(
    index,
    typescript,
    'default export should match the typescript config',
  );
});
