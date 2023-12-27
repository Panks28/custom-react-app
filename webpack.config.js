const path = require("path");
const outDir = "dist";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { home: "./index.js",
  loginPage: "./src/Components/Login.js",
  productsPage:"./src/Components/Products.js" 
},
  output: {
    path: path.join(__dirname, outDir),
    filename: '[name].js'
  },
  target: "web",
  devServer: {
    port: "9000",
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: "babel-loader", //loader which we are going to use
      },
      {
        test: /\.css$/,
        /** Each entry specifies a loader to be used. */
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          /** Loading the image file to the specified directory. */
          name: "Images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: './public/index.html',
      filename:'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      template: './public/login.html',
      filename:'./login.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Products',
      template: './public/products.html',
      filename:'./products.html'
    }),
  ],
};
