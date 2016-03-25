import webpack from 'webpack';
import NPMInstallPlugin from 'npm-install-webpack-plugin';
import HTMLPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';
import precss from 'precss';
import fontMagician from 'postcss-font-magician';

const NODE_ENV = process.env.NODE_ENV;

const PATHS = {
  app:    `${__dirname}/app`,
  build:  `${__dirname}/build`
};

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
  devtool: '#cheap-source-map',
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
    new NPMInstallPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: `${PATHS.app}/index.html`
    })
  ],
  postcss: () => [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    precss,
    fontMagician
  ]
};
