import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import importX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import nodePlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // Ignore generated files and node_modules
  {
    ignores: [
      "dist/**",
      "coverage/**",
      "node_modules/**",
      "*.config.js",
      "*.config.cjs",
    ],
  },

  // Base javascript rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Project configuration
  {
    files: ["src/**/*.ts"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },

    plugins: {
      "import-x": importX,
      "unused-imports": unusedImports,
      n: nodePlugin,
      promise: promisePlugin,
    },

    settings: {
      "import-x/resolver": {
        typescript: true,
      },
    },

    rules: {
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-debugger": "error",
      "no-unreachable": "error",

      "no-console": "warn",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "import-x/first": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-duplicates": "error",

      "promise/catch-or-return": "error",
      "promise/no-return-wrap": "error",

      "n/no-process-exit": "off",
    },
  },

  eslintConfigPrettier,
);
