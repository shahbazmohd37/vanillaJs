const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    app: './script.js',
    print: './print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: path.build,
    open: true,
    compress: true,
    hot: true,
    port: 3010,
    host: '192.168.0.103'
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      // filename: '[path]',
      minRatio: 0.8,
      algorithm: 'gzip',
    }),
  ]
};