# @coaxsoft/eslint-config-fe-react

Shared ESLint **flat config** for COAX Software React / TypeScript / Next.js projects.

**Requirements**

- Node.js `^22.13.0` or `>= 24` (same as ESLint 10)
- ESLint `^10.3.0`
- Flat config only (`eslint.config.js`) — legacy `.eslintrc.*` is not supported (removed in ESLint 10)

## Install

```bash
npm install -D eslint@^10 @coaxsoft/eslint-config-fe-react
```

Pin a major if you want to stay on v2:

```bash
npm install -D eslint@^10 @coaxsoft/eslint-config-fe-react@^2
```

TypeScript is a peer dependency. npm installs it automatically, because `typescript-eslint` and `@eslint-react` require it, so it ends up in JavaScript-only projects too. Add it explicitly to control the version (`>=5.0.0 <6.1.0`, the range `typescript-eslint` supports):

```bash
npm install -D typescript
```

Next.js projects must also install the Next.js plugin, version `^16.2.10` (an optional peer since 2.1.0, so non-Next projects don't pull it in):

```bash
npm install -D @next/eslint-plugin-next
```

Legacy v1 (eslintrc / ESLint ≤ 8):

```bash
npm install -D @coaxsoft/eslint-config-fe-react@1
```

## Usage

Create `eslint.config.js` in your project:

### Default (base + TypeScript)

The default export is base + TypeScript. Use it for React + TypeScript apps that are not Next.js:

```js
import coax from "@coaxsoft/eslint-config-fe-react";

export default [
  {
    ignores: ["node_modules/**", "dist/**"]
  },
  ...coax
];
```

### Base only (JS + React + import sorting, no TypeScript)

```js
import base from "@coaxsoft/eslint-config-fe-react/base";

export default [
  {
    ignores: ["node_modules/**", "dist/**"]
  },
  ...base
];
```

### TypeScript (base + typescript-eslint)

Same as the default export, available explicitly at the `/typescript` subpath:

```js
import typescript from "@coaxsoft/eslint-config-fe-react/typescript";

export default [
  {
    ignores: ["node_modules/**", "dist/**"]
  },
  ...typescript
];
```

### Next.js (base + TypeScript + Next.js)

Requires `@next/eslint-plugin-next` to be installed in your project (`npm install -D @next/eslint-plugin-next`).

The `next` export already ignores `.next/**`, `out/**`, `build/**` and `next-env.d.ts`.

```js
import next from "@coaxsoft/eslint-config-fe-react/next";

export default [
  ...next
];
```

## Globals

| Files | Globals |
| --- | --- |
| All files | Browser |
| `**/*.config.*`, `**/scripts/**`, `**/*.cjs` | Browser + Node.js |
| `**/*.{test,spec}.*`, `**/__tests__/**`, `**/__mocks__/**`, `setupTests.*`, `jest.setup.*`, `vitest.setup.*` | Browser + Node.js + Jest + Vitest |
| All files in the `next` export | Browser + Node.js |

`.cjs` files are parsed as CommonJS, so `require()` and `module.exports` work in them.

To allow Node.js globals in other files, install `globals` (`npm install -D globals`) and add a block after the shared config:

```js
import globals from "globals";
import coax from "@coaxsoft/eslint-config-fe-react";

export default [
  ...coax,
  {
    files: ["server/**/*.js"],
    languageOptions: { globals: globals.node }
  }
];
```

## TypeScript types

The package ships type declarations for every entry point. Each export is typed as `Array<Linter.Config>` from `eslint`, so `eslint.config.js` / `eslint.config.ts` get autocomplete and type checking without extra setup.

## What each export includes

| Export | Contents |
| --- | --- |
| `@coaxsoft/eslint-config-fe-react/base` | `@eslint/js` recommended, preserved general rules, `@stylistic` recommended + custom formatting overrides, `@eslint-react` recommended, `eslint-plugin-react-hooks`, `simple-import-sort` |
| `@coaxsoft/eslint-config-fe-react/typescript` | Everything in `base` + `typescript-eslint` strict & stylistic presets |
| `@coaxsoft/eslint-config-fe-react` | Same as `typescript` (default export) |
| `@coaxsoft/eslint-config-fe-react/next` | Everything in `typescript` + `@next/eslint-plugin-next` recommended & core-web-vitals (plugin must be installed separately) |
