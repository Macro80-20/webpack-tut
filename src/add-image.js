import SmileyFace from "./Smiley_Face.jpg";

const addImage = () => {
  document.createElement("img");
  img.alt = "Smiley face";
  img.width = 300;
  img.src = "SmileyFace";

  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
