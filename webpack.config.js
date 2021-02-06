module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./app.js",
  output: {
    filename: "app.js",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
