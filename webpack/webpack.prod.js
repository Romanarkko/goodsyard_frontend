const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Roman Ko'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
