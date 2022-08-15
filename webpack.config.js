const path = require("path");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  mode: "production",

  module: {
    rules: [
      {
        // babel rules
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // css rules
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // img assets rules
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = webpackConfig;
