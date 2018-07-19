const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
  },
};
