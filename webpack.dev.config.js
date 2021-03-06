const path = require("path");
// we usually dont need webpack plugs in production servers so we always sace as dev depend
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm

// minimal webpack config
module.exports = {
  //entry points
  // entry: "./src/index.js",
  entry: { "hello-world": "./src/hello-world.js", smiley: "./src/smiley.js" },
  //output file that will be generated as a result of webpack build. file called bundle insde directory called dist
  output: {
    // dont need handle cachingin dev
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    //  webpack where all generated files are located
    publicPath: ""
    // to show the a page from website you would use http
  },
  // last mandatoryoptions is mode. enables certain build optimzatio for dev and production
  // mode: "none",
  mode: "development",
  devServer: {
    // need to specifcy three options
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000
  },
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss)$/,
        // webpack will invoke loders from right to left. so pay attention to this
        use: ["style-loader", "css-loader", "sass-loader"]
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
      filename: "hello-world-page.html",
      template: "src/page-template.hbs",
      description: "Some description",
      //rememebr chunk wepback takes from the entry points
      chunks: ["hello-world"]
    }),
    new HtmlWebpackPlugin({
      title: "smiley-page",
      filename: "smiley-page.html",
      template: "src/page-template.hbs",
      description: "Some description",
      chunks: ["smiley"]
    })
  ]
};
// we dont need to slit common dependenies into a sep bundle becuase this is the development build
// when you run dev then you need to access the pages through thwe filnemae as they wont appear in dist
//in order to run webpack easier we can specificy a escript in json file
