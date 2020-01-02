import HelloWorldButton from "./src/components/hello-world-button/hello-world-button";
import addImage from "./src/add-image.js";
import Heading from "./src/components/heading/heading";
// helloWorldButton();
addImage();
const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
