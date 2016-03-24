const path             = require('path');
const webpack          = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlPlugin       = require('html-webpack-plugin');

const autoprefixer    = require('autoprefixer');
const preccs          = require('precss');
const fontMagician    = require('postcss-font-magician');

const PATHS = {
  app:    path.resolve(__dirname, 'app'),
  build:  path.resolve(__dirname, 'build')
}

module.exports = {
  entry: [
    'babel-polyfill',
    PATHS.app
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: PATHS.app,
        plugin: ['transform-runtime']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(PATHS.app, 'index.html')
    })
  ],
  postcss: () => [
    autoprefixer({ browsers: ['last 2 versions'] }),
    preccs,
    fontMagician
  ]
};
