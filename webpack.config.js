const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/js/Main.js"), // Correct the entry point to your main JavaScript file
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    hot: true,
    host: "localhost",
    port: 5173,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  target: "web",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
        // Remove the line below since you are already extracting styles with MiniCSSExtractPlugin
        { from: "src/style.css", to: path.resolve(__dirname, "dist") },
      ],
    }),
    new MiniCSSExtractPlugin(),
    // Remove the line below since webpack-dev-server takes care of Hot Module Replacement internally
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.css$/,
      //   use: [ "css-loader"],
      // },
    ],
  },
};
