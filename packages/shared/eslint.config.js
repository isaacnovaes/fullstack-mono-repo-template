// @ts-check
import tseslint from "typescript-eslint";
import rootConfig from "../../eslint.config.js";

export default tseslint.config(...rootConfig, {
  files: ["**/*.ts"],
  rules: {
    // Strictest rules for library code
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // Absolutely no console statements in shared library
    "no-console": "error",
  },
});
