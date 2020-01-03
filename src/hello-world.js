import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
// import _ from "lodash";
// import React from "react";

const heading = new Heading();
heading.render("hello world");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("production mode");
  console.log(
    "error is show inside bundle and not clear where it originates from"
  );
} else if (process.env.NODE_ENV === "development") {
  console.log("we are in dev env");
  console.log("should expect to see error from below method and a source map");
}

helloWorldButton.somemethod();
