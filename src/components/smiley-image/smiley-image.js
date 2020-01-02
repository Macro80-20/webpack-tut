import Smiley from "./smiley.jpg";
import "./smiley-image.scss";
class SmileyImage {
  render() {
    const img = document.createElement("img");
    img.src = Smiley;
    img.alt = "Smiley";
    img.classList.add("smiley-image");
    const bodyDomElement = document.querySelector("body");
    bodyDomElement.append(img);
  }
}

export default SmileyImage;
