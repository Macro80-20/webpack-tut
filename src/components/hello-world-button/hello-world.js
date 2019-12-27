import "./hello-world-button.scss";

const body = document.querySelector("body");
const helloWorldButton = () => {
  console.log("Hello world ");
  const btn = document.createElement("button");
  btn.innerHTML = "Hello world";
  btn.classList.add("hello-world-btn");
  btn.addEventListener("click", () => {
    const p = document.createElement("p");
    (p.innerHTML = "hello world"), body.append(p);
    p.classList.add("hello-world-text");
    console.log("Hello,World");
  });
  body.append(btn);
};
export default helloWorldButton;
