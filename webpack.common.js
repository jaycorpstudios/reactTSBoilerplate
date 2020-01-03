const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');

const config = () => (
  {
    entry: `${srcPath}/index.tsx`,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: [
                '@babel/syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.module\.scss$/i,
          loaders: ['style-loader', {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                srcPath,
              ],
            },
          },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/i,
          loaders: ['style-loader', 'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  srcPath,
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|ttf|svg|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                context: srcPath,
                useRelativePaths: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: './index.html',
      }),
    ],
  }
);

module.exports = config;
