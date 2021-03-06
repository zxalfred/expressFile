// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['airbnb-base'],
    // add your custom rules here
    rules: {
      'import/extensions': ['error', 'always', {
        js: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'max-len': [0],
      'no-param-reassign': [0],
      'class-methods-use-this': [0],
      'no-console': 'off',
      'no-use-before-define': ["error", { "functions": false, "classes": true }],
      'func-names' : ["off"],
    }
  }
  