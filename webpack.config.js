const path = require("path");

// minimal webpack config
module.exports = {
  //entry points
  entry: "./src/index.js",
  //output file that will be generated as a result of webpack build. file called bundle insde directory called dist
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  // last mandatoryoptions is mode
  mode: "none"
};

//in order to run webpack easier we can specificy a escript in json file
