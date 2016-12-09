const webpack = require('webpack');

module.exports = {
  entry: './src/components/app.jsx',
  output: {
    path: './src/public/js',
    filename: 'bundle.js'
  },
  module:{
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
