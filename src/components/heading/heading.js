import "./heading.scss";
class Heading {
  render() {
    const h1 = docuement.creatELement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "webpack is awesome";
    body.append(h1);
  }
}

export default Heading;
