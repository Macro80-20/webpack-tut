import SmileyFace from "./smiley.jpg";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = "Smiley face";
  img.width = 300;
  img.src = SmileyFace;

  const body = document.querySelector("body");
  body.append(img);
};

export default addImage;
