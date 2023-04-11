const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    bundle: glob.sync("./src/index.js"),
    /* bundle: [
      path.resolve(__dirname, "src/index.js"),
      path.resolve(__dirname, "src/psi/"),
    ], */
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  /* devtool: "source-map", */
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: [path.resolve(__dirname, "/src/sandbox.js")],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "src/template.html",
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
};
