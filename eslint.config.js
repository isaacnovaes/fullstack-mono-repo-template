// @ts-check
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  {
    rules: {
      "array-callback-return": "warn",
      "no-duplicate-imports": "warn",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-useless-assignment": "error",
      "require-atomic-updates": "warn",
      "default-case": "warn",
      "default-case-last": "warn",
      "guard-for-in": "error",
      "no-console": ["warn", { allow: ["error", "warn"] }],
      "no-lone-blocks": "error",
      "no-param-reassign": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-extra-boolean-cast": ["error", { enforceForInnerExpressions: true }],
      "no-implicit-coercion": "error",
      "no-lonely-if": "error",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "no-useless-computed-key": "warn",
      "no-useless-return": "error",
      "no-var": "error",
      "object-shorthand": "warn",
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-template": "error",
      yoda: "error",
      camelcase: "error",
    },
  },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dir,
      },
    },
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // TypeScript strict rules
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "warn",
      "@typescript-eslint/method-signature-style": "warn",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/no-useless-empty-export": "warn",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "require-await": "off",
      "@typescript-eslint/require-await": "error",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "error",
      "prefer-destructuring": "off",
      "@typescript-eslint/prefer-destructuring": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": [
        "warn",
        {
          enforceConst: true,
          detectObjects: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
        },
      ],
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": ["error"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["warn", { hoist: "all" }],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // Import management
      "import/export": "warn",
      "import/no-empty-named-blocks": "warn",
      "import/no-unused-modules": "warn",
      "import/no-commonjs": "warn",
      "import/no-import-module-exports": "warn",
      "import/enforce-node-protocol-usage": ["warn", "always"],
      "import/named": "warn",
      "import/no-cycle": "warn",
      "import/no-dynamic-require": "warn",
      "import/no-self-import": "warn",
      "import/group-exports": "warn",
      "import/no-duplicates": "warn",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
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
    },
  },
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/.vite/**",
      "**/coverage/**",
      "**/eslint.config.js",
    ],
  },
);
