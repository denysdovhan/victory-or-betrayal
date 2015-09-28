var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    js: path.resolve(__dirname, 'app/index.js'),
    html: path.resolve(__dirname, 'app/index.html')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'app')
      },
      {
        test: /\.html$/,
        loader: 'file',
        query: { name: "[name].[ext]" }
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
