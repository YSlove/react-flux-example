/* eslint-disable no-var */
var path = require('path');

var webpack = require('webpack');

var config = {
  resolve: {
    alias: {
    },
    extensions: [ '', '.js', '.jsx' ]
  },
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/app.js']
  },
  // devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  externals: {

  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
      include: path.join(__dirname, './app')
    }
   ]
  }
}

module.exports = config;
