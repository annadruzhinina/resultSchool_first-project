const tasksBlock = document.getElementById("tasks");
console.log(tasksBlock);

const allNavBtn = document.getElementsByClassName(
  "main-navigation__button-item"
);
console.log(allNavBtn);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// querySelector

const tasksBlock2 = document.querySelector("#tasks");
console.log(tasksBlock2);

const mainNavigation = document.querySelector(".main-navigation");
console.log("mainNavigation", mainNavigation);

const firstButton = document.querySelector("button");
console.log("firstButton", firstButton);

// get element by attribute

const thirdNavigationBtn = document.querySelector("[data-button-id='3']");
console.log("thirdNavigationBtn", thirdNavigationBtn);

// querySelectorAll

const allNavigationBtn = document.querySelectorAll(
  ".main-navigation__button-item"
);
console.log("allNavigationBtn", allNavigationBtn);

allNavigationBtn.forEach((button, index) => {
  console.log(index, button);
});

const createTaskBlok = document.querySelector(".create-task-block");
const submitBtn = createTaskBlok.querySelector("[type=submit]");
console.log("submitBtn", submitBtn);
