const allElements = document.querySelectorAll("*");

allElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.currentTarget.tagName === "FORM") {
      event.stopPropagation();
    }

    alert(`Bubbling ${element.tagName}`);
  });
  //   element.addEventListener(
  //     "click",
  //     () => {
  //       alert(`Diving ${element.tagName}`);
  //     },
  //     true
  //   );
});
