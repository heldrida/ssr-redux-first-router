const webpack = require('webpack')
const path = require('path')

module.exports = {
  name: 'server',
  target: 'node',
  entry: [
    path.resolve(__dirname, '../server/render.js')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../buildServer'),
    publicPath: '/static/',
    libraryTarget: 'commonjs2'
  }
}
