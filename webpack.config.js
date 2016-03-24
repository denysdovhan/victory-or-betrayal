const path             = require('path');
const webpack          = require('webpack');
const HtmlPlugin       = require('html-webpack-plugin');

const autoprefixer    = require('autoprefixer');
const preccs          = require('precss');
const fontMagician    = require('postcss-font-magician');

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
  module: {
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
        loaders: ['style', 'css', 'postcss']
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
  ],
  postcss: () => [
    autoprefixer({ browsers: ['last 2 versions'] }),
    preccs,
    fontMagician
  ]
};
