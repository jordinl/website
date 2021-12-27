const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = {
  swcMinify: true,
  ...withNextra(),
}
