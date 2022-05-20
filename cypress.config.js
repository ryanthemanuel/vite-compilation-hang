module.exports = {
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  // These tests should run quickly / fail quickly,
  // since we intentionally causing error states for testing
  defaultCommandTimeout: 1000
}
