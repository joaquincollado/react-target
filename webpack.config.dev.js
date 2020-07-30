const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const magicImporter = require("node-sass-magic-importer");
const Dotenv = require("dotenv-webpack");

process.env.NODE_ENV = "development";

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    alias: {
      assets: path.resolve(__dirname, "./src/assets/"),
      components: path.resolve(__dirname, "./src/components/"),
      locales: path.resolve(__dirname, "./src/locales/"),
      styles: path.resolve(__dirname, "./src/styles/"),
      actions: path.resolve(__dirname, "./src/redux/actions/"),
      reducers: path.resolve(__dirname, "./src/redux/reducers/"),
      api: path.resolve(__dirname, "./src/api/"),
    },
  },
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      favicon: "src/favicon.ico",
    }),
    new Dotenv({
      path: path.resolve(__dirname, `./.env.${process.env.ENV || "dev"}`),
      systemvars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              importer: magicImporter(),
              includePaths: [path.resolve(__dirname, "./src", "scss")],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
