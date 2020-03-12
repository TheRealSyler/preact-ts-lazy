import { Configuration } from 'webpack';
import { Configuration as Dev } from 'webpack-dev-server';
const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

interface C extends Dev, Configuration {}

const config: C = {
  entry: {
    index: `${__dirname}/src/index.tsx`
  },
  output: {
    path: resolve(__dirname, 'dist'),
    chunkFilename: '[name].[id].js',
    filename: '[name].bundle.js'
  },

  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: false
  }
};

module.exports = config;
