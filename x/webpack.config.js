const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    stats: "minimal",
  },
  entry: "./x/index.ts",
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "x/index.html",
    }),
  ],
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
};
