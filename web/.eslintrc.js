module.exports = {
  root: true,
  settings: {},
  env: {
    browser: true, // Enables browser globals like window and document
    node: true, // Enables Node.js global variables and Node.js scoping.
    "jest/globals": true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  extends: ["airbnb", "prettier", "plugin:testing-library/react"],
  plugins: ["prettier", "react", "testing-library"],
  overrides: [
    Object.assign(
      {
        files: ["**/*.test.js"],
        env: { jest: true },
        plugins: ["jest"],
      },
      require("eslint-plugin-jest").configs.recommended,
    ),
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use .prettierrc file as source
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // To allow importing .jsx files
    "no-console": 1,
    "no-unused-vars": 1,
    "import/no-unresolved": 2,
    "no-undefined": 2,
    "react/jsx-uses-vars": 2,
    "no-underscore-dangle": "off",
    "react/prop-types": 0,
  },
  globals: { cy: "readonly", Cypress: "readonly", window: true }, //Cannot be reassigned
};
