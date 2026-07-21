# @coaxsoft/eslint-config-fe-react

Shared ESLint **flat config** for COAX Software React / TypeScript / Next.js projects.

**Requirements**

- Node.js `>= 22`
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

TypeScript is an optional peer (recommended for most apps):

```bash
npm install -D typescript
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

```js
import next from "@coaxsoft/eslint-config-fe-react/next";

export default [
  {
    ignores: [".next/**", "node_modules/**", "dist/**"]
  },
  ...next
];
```

## What each export includes

| Export | Contents |
| --- | --- |
| `@coaxsoft/eslint-config-fe-react/base` | `@eslint/js` recommended, preserved general rules, `@stylistic` recommended + custom formatting overrides, `@eslint-react` recommended, `eslint-plugin-react-hooks`, `simple-import-sort` |
| `@coaxsoft/eslint-config-fe-react/typescript` | Everything in `base` + `typescript-eslint` strict & stylistic presets |
| `@coaxsoft/eslint-config-fe-react` | Same as `typescript` (default export) |
| `@coaxsoft/eslint-config-fe-react/next` | Everything in `typescript` + `@next/eslint-plugin-next` recommended & core-web-vitals |
