import typescript from "./typescript.js";

/**
 * Default export: base + TypeScript (JS + React + TypeScript + import sort).
 *
 * Prefer subpath imports when you need a different slice of the stack:
 * - `@coaxsoft/eslint-config-fe-react/base` (no TypeScript)
 * - `@coaxsoft/eslint-config-fe-react/next` (adds Next.js rules)
 */
export default typescript;
