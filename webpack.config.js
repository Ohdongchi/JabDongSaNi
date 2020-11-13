const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "wordChain-setting",
  mode: "development",
  devtool: "eval-source-map",
  devServer:{
    hot:true,
    inline:true,
    host:'0.0.0.0',
    port:'3000',
    contentBase:__dirname + "/public"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["@babel/polyfill","./src/client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        test:/\.css$/,
        loader:['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  }, // 출력
};
