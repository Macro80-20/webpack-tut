const path = require("path");

// minimal webpack config
module.exports = {
  //entry points
  entry: "./src/index.js",
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
      }
    ]
  }
};

//in order to run webpack easier we can specificy a escript in json file
