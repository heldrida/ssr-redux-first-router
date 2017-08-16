const webpack = require('webpack')
const path = require('path')

module.exports = {
  name: 'client',
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../buildClient'),
    publicPath: '/static/'
  }
}
