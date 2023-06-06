//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ Click ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
// const firstNavBtn = document.querySelector(".main-navigation__button-item");
// firstNavBtn.addEventListener("click", (event) => {
//   console.log(event.target);
//   //   const target = event.target;
//   const { target } = event;
//   target.classList.add("main-navigation__button-item_selected");
// });

const allNavBtn = document.querySelectorAll(".main-navigation__button-item");

allNavBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    allNavBtn.forEach((button) => {
      button.classList.remove("main-navigation__button-item_selected");
    });
    const { target } = event;
    target.classList.add("main-navigation__button-item_selected");
  });
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ Submit⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  const taskNameIput = target.taskName;
  console.log(taskNameIput);
  const inputValue = taskNameIput.value;

  if (inputValue) {
    alert(`You create task ${inputValue}`);
    console.log(inputValue);
  } else {
    alert("Inccoret input value");
  }
});
