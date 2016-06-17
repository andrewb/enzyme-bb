module.exports = {
    "extends": [
      "airbnb",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "env": {
      "jest": true
    },
    "rules": {
      "comma-dangle": 0,
      "no-trailing-spaces": 0
    },
    "settings": {
      "import/resolver": "webpack"
    }
};
