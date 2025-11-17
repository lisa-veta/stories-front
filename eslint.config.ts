// eslint.config.ts
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import react from "eslint-plugin-react-x";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: ["eslint.config.ts", "**/*.config.*", "dist", "build", "node_modules"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            react.configs.recommended,
        ],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/prefer-as-const": "warn",

            "no-console": "error",
            "no-debugger": "error",
            "no-alert": "warn",
            "prefer-const": "error",
            "no-var": "error",
            "eqeqeq": ["error", "always"],
            "curly": ["error", "all"],

            "no-duplicate-imports": "error",
            "prefer-template": "warn",

            "indent": ["error", 2],
            "no-tabs": "error",
            "no-mixed-spaces-and-tabs": "error",
            "no-trailing-spaces": "error",
            "eol-last": "error",
            "comma-spacing": ["error", { "before": false, "after": true }],
            "semi": ["error", "always"],
            "quotes": ["error", "single"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "comma-dangle": ["error", "always-multiline"],
        },
    },
]);