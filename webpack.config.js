const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  context: `${__dirname}/src/js`,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
  },
  devtool: isDev ? 'inline-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: {
          loader: 'riot-tag-loader',
          query: {
            hot: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.tag'],
  },
  plugins: isDev ? [] : [new BundleAnalyzerPlugin()],
}
