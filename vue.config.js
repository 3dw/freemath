module.exports = {
  runtimeCompiler: true, 
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}