let path = require('path');
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "./bundle.js",
    publicPath: "dist/"
  },
  devtool: "source-map",
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        query:
        {
          presets:['es2015']
        }
    }],
    preLoaders: [
      // Bundle resource files
      { test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/, loader: "file-loader" },

      // Bundle stylesheets
      { test: /\.css$/, loader: "style-loader!css-loader" },  
    ]
  }
};