var path       = require('path');
var webpack    = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

var APP   = path.resolve(__dirname, 'app');
var BUILD = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(APP, 'index.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module:{
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: APP
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: APP,
        plugin: ['transform-runtime']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(APP, 'index.html')
    })
  ]
};
