const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');
const devProperties = require('./properties/properties-dev');

const config = (env, args) => {
  const commonConfig = common(env, args);
  return merge(commonConfig, {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },
    devServer: {
      compress: true,
      contentBase: path.resolve(__dirname, 'build'),
      hot: true,
      port: 9001,
      historyApiFallback: true,
      open: true,
      host: '0.0.0.0',
      watchOptions: {
        ignored: /node_modules/,
      },
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(devProperties),
    ],
  });
};

module.exports = config;
