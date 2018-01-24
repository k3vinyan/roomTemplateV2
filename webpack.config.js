const path = require('path');

const config = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config;
