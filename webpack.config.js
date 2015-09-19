var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'app')
      }
    ]
  }
};
