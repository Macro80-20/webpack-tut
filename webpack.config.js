const path = require("path");
// we usually dont need webpack plugs in production servers so we always sace as dev depend
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// minimal webpack config
module.exports = {
  //entry points
  entry: "./index.js",
  //output file that will be generated as a result of webpack build. file called bundle insde directory called dist
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    //  webpack where all generated files are located
    publicPath: "dist/"
    // to show the a page from website you would use http
  },
  // last mandatoryoptions is mode
  mode: "none",
  module: {
    // each rule is a object itself , with at least two properties
    rules: [
      {
        test: /\.(png|jpg)$/,
        // here we specify which loader should be used by wepback when it needs to import png or jpg file
        use: ["file-loader"]
      },
      {
        test: /\.(xml)$/,
        // here we specify which loader should be used by wepback when it needs to import XML files. there are many loader to be used need to know which one and install it
        use: ["xml-loader"]
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss)$/,
        // webpack will invoke loders from right to left. so pay attention to this
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            //plugins are additional js libararies that do everything that loaders canniot do
            // they can also modify how the bundles themselves are created
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      //we can extract our css into a separate file and even specify the name
      filename: "styles.css"
    })
  ]
};

//in order to run webpack easier we can specificy a escript in json file
