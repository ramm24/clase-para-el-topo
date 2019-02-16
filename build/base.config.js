module.exports = {
  entry: './entry.js',
  devServer: {
    port: 8123,
    contentBase: './html',
    watchContentBase: true
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },s
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
};
