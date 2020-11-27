module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hiperkon/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
}
