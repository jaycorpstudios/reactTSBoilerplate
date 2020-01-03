module.exports = {
  env: {
      browser: true,
      es6: true
  },
  extends: [
      'plugin:react/recommended',
      'airbnb'
  ],
  globals: {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  plugins: [
      'react',
      '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  "overrides": [
      {
          "files": [
          "test/**/*__Spec.js",
          "test/**/*__Test.js"
          ],
          "env": {
          "jest": true
          }
      }
  ],
  rules: {
      'react/jsx-filename-extension': [ 1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] } ],
      'jsx-a11y/control-has-associated-label': [0],
      'react/jsx-props-no-spreading': [0],
      'import/extensions': [0],
      'react/prop-types': [ 1, {
          ignore: [],
          customValidators: [],
          skipUndeclared: false
        }
      ]
  },
  settings: {
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
     },
     'import/resolver': {
         'node': {
             'extensions': [".js",".jsx",".ts",".tsx"]
         }
     }
}
};