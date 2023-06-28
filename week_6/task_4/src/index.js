import IMAGE from "../assets/JavaScript-logo.png";
import "../index.css";
console.log("Hello world!");

const customText = document.createElement("h1");
customText.innerText = "I love JavaScript ❤️";
document.body.append(customText);

const imgHTML = document.createElement("img");
imgHTML.src = IMAGE;
imgHTML.className = "js-image";
document.body.append(imgHTML);
