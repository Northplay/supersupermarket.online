module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "classes": true,
      "impliedStrict": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "quotes": ["error", "single"],
    "react/prop-types": ["warn", { ignore: ["children"]}],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js"] }],
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": ["error"],
    "semi": ["error", "always"],
  }
};
