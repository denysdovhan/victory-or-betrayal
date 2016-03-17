var path       = require('path');
var webpack    = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

var APP = path.resolve(__dirname, 'app');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(APP, 'index.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module:{
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: APP
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
