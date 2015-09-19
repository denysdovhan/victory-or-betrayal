var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'app')
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin()
  ]
};
