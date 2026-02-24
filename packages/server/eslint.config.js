// @ts-check
import security from "eslint-plugin-security";
import { defineConfig } from "eslint/config";
import rootConfig from "../../eslint.config.js";

export default defineConfig(...rootConfig, {
  files: ["**/*.ts"],
  plugins: {
    security,
  },
  rules: {
    // Security rules
    "security/detect-buffer-noassert": "error",
    "security/detect-child-process": "warn",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-new-buffer": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-fs-filename": "warn",
    "security/detect-non-literal-regexp": "warn",
    "security/detect-non-literal-require": "warn",
    "security/detect-object-injection": "off", // Too many false positives
    "security/detect-possible-timing-attacks": "warn",
    "security/detect-pseudoRandomBytes": "error",
    "security/detect-unsafe-regex": "error",

    // Allow console in server (warnings are acceptable)
    "no-console": "off",

    // Allow unused Hono context parameter
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_|^c$", // Allow 'c' for Hono context
      },
    ],
  },
});
