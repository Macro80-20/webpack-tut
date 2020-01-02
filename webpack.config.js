const path = require("path");
// we usually dont need webpack plugs in production servers so we always sace as dev depend
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm

// minimal webpack config
module.exports = {
  //entry points
  entry: "./index.js",
  //output file that will be generated as a result of webpack build. file called bundle insde directory called dist
  output: {
    // add md5 hash to the contents of the file
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    //  webpack where all generated files are located
    publicPath: ""
    // to show the a page from website you would use http
  },
  // last mandatoryoptions is mode. enables certain build optimzatio for dev and production
  // mode: "none",
  mode: "development",
  // production would enable a number of -plugins, however development uses source maps for errors

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
      },
      {
        test: /\.hbs$/,
        use: {
          loader: "handlebars-loader"
        }
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      //we can extract our css into a separate file and even specify the name
      filename: "styles.[contenthash].css"
    }),
    //everytime we run webpack this plugin removes all the files from the output folder essentially cleaning it
    new CleanWebpackPlugin({
      // i can specify an array of the file pattterns which i want to remove. all patterns are relative to the webpack out.path directory
      // in this case the build/subgfolder
      cleanOnceBeforeBuildPatternsPatterns: [
        "**/*", // this is how build paterns look like and it merans clean everything
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HtmlWebpackPlugin({
      title: "Hello world",
      // this tells webpack to create a subfolder in the dist folder and put the html file inside this folder
      // filename: "subfolder/custom_filename.html",
      // meta: {
      //   //this tells webpack to add a desciprtion meta tag to the page
      //   description: "Some description"
      // },
      template: "src/index.hbs",
      // we use description variable in our hbs template to cusomise the index.html file
      description: "Some description"
    })
  ]
};

//in order to run webpack easier we can specificy a escript in json file
