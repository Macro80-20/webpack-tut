const path = require("path");
// we usually dont need webpack plugs in production servers so we always sace as dev depend
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// minimal webpack config
module.exports = {
  //entry points
  // entry: "./src/index.js",
  entry: {
    "hello-world-page": "./src/hello-world.js",
    "smiley-page": "./src/smiley.js"
  },
  //output file that will be generated as a result of webpack build. file called bundle insde directory called dist
  output: {
    // add md5 hash to the contents of the file
    filename: "[name].[contenthash].js",
    // since i have more than one entrypoint i nee to specify somehwere that their names should be different
    //webpack will take the name of the property from the entry point configuration and put it in the filename!
    //  webpack where all generated files are located
    publicPath: ""
    // to show the a page from website you would use http
  },
  // last mandatoryoptions is mode. enables certain build optimzatio for dev and production
  // mode: "none",
  mode: "production",
  // production would enable a number of -plugins, however development uses source maps for errors
  optimization: {
    splitChunks: {
      chunks: "all",
      // if dependencies are larger than 10kb we put them into sep bundle
      minSize: 5000,
      // we can also speficiy another name delimiter for this addtional bundle. on the the bundle each file wil be split with a underscrore
      automaticNameDelimiter: "_"
    }
  },
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
    new MiniCssExtractPlugin({
      //we can extract our css into a separate file and even specify the name. in this case i used name so the bundle uses
      // filename: "bundle.[contenthash].css"
      filename: "[name].[contenthash].css"
    }),
    //everytime we run webpack this plugin removes all the files from the output folder essentially cleaning it
    new CleanWebpackPlugin({
      // i can specify an array of the file pattterns which i want to remove. all patterns are relative to the webpack out.path directory
      // in this case the build/subgfolder
      // cleanOnceBeforeBuildPatternsPatterns: [
      //   "**/*", // this is how build paterns look like and it merans clean everything. i rmeoved the folders with build
      //   path.join(process.cwd(), "build/**/*")
      // ]
    }),
    new HtmlWebpackPlugin({
      title: "Hello world",
      // this tells webpack to create a subfolder in the dist folder and put the html file inside this folder
      filename: "hello-world.html",
      // meta: {
      //   //this tells webpack to add a desciprtion meta tag to the page
      //   description: "Some description"
      // },
      template: "src/page-template.hbs",
      // we use description variable in our hbs template to cusomise the index.html file
      description: "Some description",
      //How do we know which byndles to includes in our html? chunk allows us to do this and must be same name as the js bundle
      chunks: ["hello-world-page", "vendors~hello-world-page~smiley-page"]
    }),
    // need to include two htmplugins if we want to begin to begin bundling for MPA's
    new HtmlWebpackPlugin({
      title: "Smiley Face",
      filename: "smiley-face.html",
      template: "src/page-template.hbs",
      description: "smiley face",
      chunks: ["smiley-page", "vendors~hello-world-page~smiley-page"]
    })
  ]
};
// webpack tutorial/dist/.0fb3c467dd6bf788750f.js
//in order to run webpack easier we can specificy a escript in json file
