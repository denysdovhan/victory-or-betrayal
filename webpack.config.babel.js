import webpack from 'webpack';
import NPMInstallPlugin from 'npm-install-webpack-plugin';
import HTMLPlugin from 'html-webpack-plugin';

import cssnext from 'postcss-cssnext';

const NODE_ENV = process.env.NODE_ENV;

const PATHS = {
  app:    `${__dirname}/app`,
  build:  `${__dirname}/build`
};

const config = {
  entry: [
    'babel-polyfill',
    PATHS.app
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css'],
    alias: {
      actions:    `${PATHS.app}/actions`,
      components: `${PATHS.app}/components`,
      stores:     `${PATHS.app}/stores`,
      styles:     `${PATHS.app}/styles`
    }
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
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&sourceMap&importLoaders=1', 'postcss']
      }
    ]
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
    cssnext
  ]
};

if (NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  );
} else {
  config.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true
    }
  };
}

export default config;
