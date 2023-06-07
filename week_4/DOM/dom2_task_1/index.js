// Получаем ссылку на элемент .tasks-list
const tasksList = document.querySelector(".tasks-list");

function createTaskElement(taskText) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  const taskId = Date.now().toString(); // Generate unique task ID
  taskItem.setAttribute("data-task-id", taskId);

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("task-item__main-container");

  const mainContent = document.createElement("div");
  mainContent.classList.add("task-item__main-content");

  const checkboxForm = document.createElement("form");
  checkboxForm.classList.add("checkbox-form");
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox-form__checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `task-${taskId}`);
  const label = document.createElement("label");
  label.setAttribute("for", `task-${taskId}`);
  checkboxForm.appendChild(checkbox);
  checkboxForm.appendChild(label);

  const taskTextElement = document.createElement("span");
  taskTextElement.classList.add("task-item__text");
  taskTextElement.textContent = taskText;

  mainContent.appendChild(checkboxForm);
  mainContent.appendChild(taskTextElement);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "task-item__delete-button",
    "default-button",
    "delete-button"
  );
  deleteButton.setAttribute("data-delete-task-id", taskId);
  deleteButton.textContent = "Удалить";

  mainContainer.appendChild(mainContent);
  mainContainer.appendChild(deleteButton);

  taskItem.appendChild(mainContainer);

  return taskItem;
}

// Step 1: Add event listener to form submit event
const form = document.querySelector(".create-task-block");
form.addEventListener("submit", function (event) {
  // Step 2: Prevent default form submission
  event.preventDefault();

  // Step 3: Retrieve task text input value
  const taskTextInput = document.querySelector(".create-task-block__input");
  const taskText = taskTextInput.value;

  // console.log(taskTextInput);
  // console.log(taskText);
  if (taskText.trim() !== "") {
    // Check if taskText is not empty
    // Step 4: Check if task with the same text already exists
    const existingTasks = document.querySelectorAll(".task-item__text");
    let taskAlreadyExists = false;

    for (let i = 0; i < existingTasks.length; i++) {
      if (existingTasks[i].textContent.trim() === taskText.trim()) {
        taskAlreadyExists = true;
        break;
      }
    }

    if (!taskAlreadyExists) {
      // Step 5: Create new task element
      const newTask = createTaskElement(taskText);
      console.log(newTask);

      // Step 6: Append new task element to container
      tasksList.appendChild(newTask);
    } else {
      // Step 7: Display an error message
      const error = document.createElement("span");
      error.classList.add("error-message-block");
      error.textContent = "Задача с таким названием уже существует.";
      console.log(error);
      tasksList.appendChild(error);
    }
  } else {
    // Step 8: Display an error message for empty task text
    const error = document.createElement("span");
    error.classList.add("error-message-block");
    error.textContent = "Название задачи не должно быть пустым.";
    console.log(error);
    tasksList.appendChild(error);
  }

  // Clear the input field
  taskTextInput.value = "";
});
