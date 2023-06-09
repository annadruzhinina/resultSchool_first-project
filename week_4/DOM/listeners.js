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

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ keydown, keyup ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️

document.addEventListener("keydown", (event) => {
  const taskText = document.querySelector(".task-item__text");
  const text = taskText.innerText;
  console.log(event);
  const { key } = event;
  console.log("key", key);
  // const taskItemToDelete = document.querySelector(`[ data-task-id="${key}"]`);
  // if (taskItemToDelete) {
  //   const taskText = document.querySelector(".task-item__text");
  //   console.log(taskText);
  //   const deleteConfirmed = confirm(`Do you want delete the task  "${text}" ?`);
  //   if (deleteConfirmed) {
  //     taskItemToDelete.remove();
  //   }
  // } else {
  //   alert("Data is incorrect");
  // }
});

document.addEventListener("keyup", (event) => {
  const { key } = event;
  console.log("keyup", key);
  const taskItemToDelete = document.querySelector(`[data-task-id = '${key}']`);
  if (taskItemToDelete) {
    taskItemToDelete.remove();
  }
});

const createTooltip = (text) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  tooltip.className = "tooltip";
  return tooltip;
};

document.addEventListener("mouseover", (event) => {
  const { target } = event;
  const isOverDeleteBtn = target.className.includes("task-item__delete-button");

  if (isOverDeleteBtn) {
    const taskItemHTML = target.closest(".task-item");
    const taskId = taskItemHTML?.dataset.taskId;

    if (taskId) {
      const tooltipHTML = createTooltip(`Delete task by number ${taskId}?`);
      target.append(tooltipHTML);
    }
  }
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ mouseout ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️

document.addEventListener("mouseout", (event) => {
  const { target } = event;
  const isOutFromDeleteBtn = target.className.includes(
    "task-item__delete-button"
  );

  if (isOutFromDeleteBtn) {
    const tooltip = target.querySelector(".tooltip");

    if (tooltip) {
      tooltip.remove();
    }
  }
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ mousemoove ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
// document.addEventListener("mousemove", (event) => {
//   console.log(event);
// });

// contextmenu
document.addEventListener("contextmenu", (event) => {
  // console.log(event);
  event.preventDefault();
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ change ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ input ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️

const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes("@")) {
    return false;
  } else {
    return true;
  }
};

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = document.querySelector(".create-task-block__input");

taskNameInput.addEventListener("change", (event) => {
  // console.log(event);
  const { target } = event;
  const { value } = target;
  console.log(target);
  console.log(value);
  const isValid = checkTaskNameInputOnValidation(value);
  const messageBlockFromDOM = documet.querySelector(".error-message-block");
  if (!isValid) {
    const newMessageBlock = document.createElement("span");
    newMessageBlock.className = "error-message-block";
    newMessageBlock.textContent =
      "Error. Text for Task should not to be empty or contain '@' symbol!";
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDOM) {
    messageBlockFromDOM.remove();
  }
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️  ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
