import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/ts/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.[tj]sx?$/,
        loader: "babel-loader"
      },
      { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], }
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};

export default config;