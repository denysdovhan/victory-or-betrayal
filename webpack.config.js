var path = require('path');
var webpack = require('webpack');
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
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'app')
      }
    ]
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: "Victory or Betrayal"
    })
  ]
};
