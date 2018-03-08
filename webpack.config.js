var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }            
          }
        ]
      }
      // {
      //   test : /\.css$/,
      //   include: /node_modules/,
      //   loaders: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.css$/,
      //   use: 'style-loader'
      // }, {
      //   test: /\.css$/,
      //   use: 'css-loader'
      // }
    ]
  }
};