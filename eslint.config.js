import config from "./index.js";

export default [
  {
    ignores: ["node_modules/**", "package-lock.json"]
  },
  ...config
];
