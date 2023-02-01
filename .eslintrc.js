module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "project": "tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "never"],
    "@typescript-eslint/semi": "off",
    "no-unexpected-multiline": "error"
  }
}
