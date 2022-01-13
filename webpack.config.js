const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    index: './src/ts/index.ts',
    login: './src/ts/login.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].js'
  },
  devServer: {
    open: true,
    host: 'localhost',
    watchFiles: ['src/*.html'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dashboard',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'user management',
      filename: 'user-management.html',
      template: path.resolve(__dirname, 'src/user-management.html'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'login',
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/login.html'),
      chunks: ['login']
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
