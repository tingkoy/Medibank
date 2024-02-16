const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    medibank: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build_medibank_dev'),
    filename: '[name]_[contenthash].js',
    clean: true,
    assetModuleFilename: '[contenthash][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    watchFiles:['src/**/*.html'],
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Medibank',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new webpack.ProvidePlugin(
      {
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery":"jquery"
      }
    ),
    // new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin()
  ]
}