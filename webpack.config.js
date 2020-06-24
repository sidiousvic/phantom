const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: "./phantom.ts",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "development",
  output: {
    filename: "phantom.js",
    path: path.resolve(__dirname, "dist"),
    library: "@sidiousvic/phantom",
    libraryTarget: "commonjs2",
    libraryExport: "default",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
