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
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: [{loader: 'sytle-loader'}, {loader: 'css-loader'}]
      }
    ]
  }
}

module.exports = config;
