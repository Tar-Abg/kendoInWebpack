let path = require('path');
let conf = {
  entry: './src/menu.js', 
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'kendoMenu.js',
      publicPath: "dist/"
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};

let conf1 = {
  entry: './src/kendoGrid.js', 
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'grid.js',
      publicPath: "dist/"
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
module.exports = [ conf, conf1]
