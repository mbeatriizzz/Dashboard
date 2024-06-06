import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
  {
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettierConfig,
];
