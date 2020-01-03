import Heading from "./components/heading/heading";
import SmileyImage from "./components/smiley-image/smiley-image";
import _ from "lodash";
const heading = new Heading();
heading.render(_.upperFirst("smiley Page"));
const smileyImage = new SmileyImage();
smileyImage.render();
