/**  for config compresion gzip and brotli, via static , requiere config server for send files .br or .gzip (
 * for .html.br, .js.br, css.br or .html.gzip, .js.gzip, css.gzip, etc )**/

// const BrotliPlugin = require('brotli-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const zopfli = require('@gfx/zopfli')

// let plugins = []
// if (process.env.NODE_ENV === 'production') {
//   const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
//   plugins = [
//     new CompressionPlugin({
//       algorithm(input, compressionOptions, callback) {
//         return zopfli.gzip(input, compressionOptions, callback)
//       },
//       compressionOptions: {
//         numiterations: 15
//       },
//       minRatio: 0.99,
//       test: compressionTest
//     }),
//     new BrotliPlugin({
//       test: compressionTest,
//       minRatio: 0.99,
//       deleteOriginalAssets: true// delete: .js, .css, .html 
//     })
//   ]
// }

module.exports = {
  publicPath: 'petsapp',
  // configureWebpack: {
  //   plugins
  // },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
