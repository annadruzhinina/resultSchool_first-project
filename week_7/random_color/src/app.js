import { getRandomColor } from "./core/utils";

export default function initApp() {
  console.log("Hello world");

  const changeColorBtn = document.createElement("button");
  changeColorBtn.textContent = "Изменить цвет страницы";
  changeColorBtn.className = "button";
  document.body.append(changeColorBtn);

  changeColorBtn.addEventListener("click", getRandomColor);
}
