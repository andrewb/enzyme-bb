module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/no-danger": 0,
    /*
     * Code Climate only supports a limited number of plugins. Unfortunately
     * we cannot use eslint-import-resolver-webpack in their environment. Disable
     * these locally for consistency. This may change in the future.
     */
     "import/no-unresolved": 0,
     "import/no-extraneous-dependencies": 0,
     "import/extensions": ["off", "never"]
  }
}
