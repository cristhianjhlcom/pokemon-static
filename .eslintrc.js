module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "next/core-web-vitals",
    "plugin:editorconfig/all",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "editorconfig",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports",
    "folders"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-webpack-loader-syntax": "error",
    "folders/match-regex": ["error", "^[a-z-]+$", "/js/"],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
        "warn",
        {
            "vars": "all",
            "varsIgnorePattern": "^_",
            "args": "after-used",
            "argsIgnorePattern": "^_"
        }
    ],
    "@typescript-eslint/no-non-null-assertion": "off"
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
