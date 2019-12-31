import "./hello-world-button.scss";

// const body = document.querySelector("body");
// const helloWorldButton = () => {
//   console.log("Hello world ");
//   const btn = document.createElement("button");
//   btn.innerHTML = "Hello world";
//   btn.classList.add("hello-world-btn");
//   btn.addEventListener("click", () => {
//     const p = document.createElement("p");
//     (p.innerHTML = "hello world"), body.append(p);
//     p.classList.add("hello-world-text");
//     console.log("Hello,World");
//   });
//   body.append(btn);
// };
// going to use class property, it is not supported by most browsers, we will use
// a transpiler for this

class HelloWorldButton {
  buttonCssClass = "hello-world-btn";
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Hello world";
    button.onClick = () => {
      const p = document.createElement("p");
      (p.innerHTML = "hello world"), body.append(p);
      p.classList.add("hello-world-text");
    };
    button.classList.add(this.buttonCssClass);
    body.append(btn);
  }
}

export default helloWorldButton;
