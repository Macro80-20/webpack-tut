import HelloWorldButton from "./src/components/hello-world-button/hello-world-button";
import addImage from "./src/add-image.js";
import Heading from "./src/components/heading/heading";
// helloWorldButton();
addImage();
const heading = new Heading();
heading.render();
const heading2 = new Heading();
heading2.render();
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
