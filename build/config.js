const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  devServer: {
    port: 8123,
    watchContentBase: true
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'sass-loader', options: { includePaths: ['node_modules'] } },
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.html'
    })
  ]
};
