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

// example
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Пример документа</title>
//     </head>
//     <body>
//         <div id="main">
//             <p class="text" data-id="1">Первый абзац</p>
//             <p class="text" data-id="2">Второй абзац</p>
//         </div>
//     </body>
// </html>

// document.addEventListener("keydown", (event) => {
//   const key = event.key;
//   const p = document.querySelector(`[data-id='${key}']`);
//   if (p) {
//     p.style.fontWeight = "bold";
//   }
// });

// document.addEventListener("keyup", (event) => {
//   const key = event.key;
//   const p = document.querySelector(`[data-id='${key}']`);
//   if (p) {
//     p.style.fontWeight = "normal";
//   }
// });

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ mouseover ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
const createToolTipe = (text) => {
  const tooltip = document.querySelector("span");
  tooltip.textContent = text;
  tooltip.className = "tooltip";
  return tooltip;
};

document.addEventListener("mouseover", (event) => {
  console.log(event);
  const { target } = event;
  // console.log(target);
  const isOverDeleteBtn = target.className.includes("task-item__delete-button");
  if (isOverDeleteBtn) {
    const taskItemHTML = target.closest(".task-item");
    const taskId = taskItemHTML?.dataset.taskId;
    if (taskId) {
      const tooltipHTML = createToolTipe(`Delete task by number ${taskId}?`);
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
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }
});

//⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ mousemoove ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
document.addEventListener("mousemove", (event) => {
  console.log(event);
});
