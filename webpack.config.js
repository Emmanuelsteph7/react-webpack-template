const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// what webpack simply does is to bundle all our files into one js file
module.exports = {
  entry: "./src/index.js", // this is the react entry file
  // output is where we want our compiled code to go
  output: {
    path: path.join(__dirname, "/build"), // this specifies the name of the folder and its path
    filename: "index_bundle.js", // this specifies the file name in the folder
  },
  //   modules is where we specify our loaders
  module: {
    rules: [
      {
        test: /\.js$/, // this searches for any file that ends with the .js extension
        exclude: /node_modules/, // this excludes the node_modules folder from the search
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    //   this html-webpack-plugin creates an index.html file when it builds
    new HtmlWebpackPlugin({
      template: "./src/index.html", // this just tells the plugin to use this html file as a template for the built file
    }),
  ],
};
