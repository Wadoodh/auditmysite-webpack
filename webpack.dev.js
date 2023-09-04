const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
});
