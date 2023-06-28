import "../index.css";
import JS_IMAGE from "../assets/JavaScript-logo.png";

const HtmlWebpackPlugin = require("html-webpack-plugin");

function hello() {
  console.log("Hello world!");
}

hello();

const jsImageHTML = document.createElement("img");
jsImageHTML.src = JS_IMAGE;
jsImageHTML.className = "js-image";
document.body.append(jsImageHTML);
