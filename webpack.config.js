const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

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
        type: "asset",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "vanillaJS app",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  // 3.  add clean:true to output to keep the dist folder clean
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },

  mode: "production",
};

module.exports = webpackConfig;
