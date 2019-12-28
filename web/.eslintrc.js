module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'semi': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
    'jsx-quotes': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
