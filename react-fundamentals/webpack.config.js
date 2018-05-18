
module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devtool: '#inline-source-map',
};
