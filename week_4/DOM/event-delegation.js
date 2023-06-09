// Делегирование собыий

const allNavigationButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);

allNavigationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetButton = event.target;
    console.log(targetButton);
    allNavigationButtons.forEach((navButton) => {
      navButton.classList.remove("main-navigation__button-item_selected");
    });
    targetButton.classList.add("main-navigation__button-item_selected");
  });
});

const mainNavigation = document.querySelector(".main-navigation");
mainNavigation.addEventListener("click", (event) => {
  console.log("target", event.target);
  //   const btn = document.querySelector(".main-navigation__button-item");
  //   const text = btn.textContent;
  //   console.log(text);
  const isNavButton = event.target.closest(".main-navigation__button-item");
  console.log(isNavButton);
  if (isNavButton) {
    // do something
    allNavigationButtons.forEach((navButton) => {
      navButton.classList.remove("main-navigation__button-item_selected");
    });
    targetButton.classList.add("main-navigation__button-item_selected");
  }
});
