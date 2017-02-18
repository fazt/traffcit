const webpack = require('webpack');

module.exports = {
  entry: './src/react/App.jsx',

  output: {
    path: './src/public/js',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['','.js','.jsx','.json']
  },

  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
