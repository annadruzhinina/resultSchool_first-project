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

let taskItemToDelete; // Declare the taskItem variable

tasksList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.remove("modal-overlay_hidden");

    // Assign the clicked task item to the taskItem variable
    taskItemToDelete = event.target.closest(".task-item");
  }
});

// Step 3: Add event listener to the cancel button in the modal window
const cancelButton = document.querySelector(".delete-modal__cancel-button");
cancelButton.addEventListener("click", function () {
  // Step 4: Hide the modal window
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.add("modal-overlay_hidden");
});

// Step 5: Add event listener to the confirm button in the modal window
const confirmButton = document.querySelector(".delete-modal__confirm-button");
confirmButton.addEventListener("click", function () {
  if (taskItemToDelete) {
    // Delete the task item
    taskItemToDelete.remove();
    taskItemToDelete = null; // Reset the variable

    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.add("modal-overlay_hidden");
  }
});

// Step 1: Add event listener to form submit event
const form = document.querySelector(".create-task-block");
form.addEventListener("submit", function (event) {
  // Step 2: Prevent default form submission
  event.preventDefault();

  // Step 3: Retrieve task text input value
  const taskTextInput = document.querySelector(".create-task-block__input");
  const taskText = taskTextInput.value;

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

      // Remove existing error messages
      const existingErrors = document.querySelectorAll(".error-message-block");
      existingErrors.forEach((errorMessage) => {
        errorMessage.remove();
      });

      tasksList.appendChild(error);
    }
  } else {
    // Step 8: Display an error message for empty task text
    const error = document.createElement("span");
    error.classList.add("error-message-block");
    error.textContent = "Название задачи не должно быть пустым.";

    // Remove existing error messages
    const existingErrors = document.querySelectorAll(".error-message-block");
    existingErrors.forEach((errorMessage) => {
      errorMessage.remove();
    });

    tasksList.appendChild(error);
  }

  // Clear the input field
  taskTextInput.value = "";
  // Получаем ссылку на кнопку Tab
  const tabButton = document.querySelector("#tab-button");

  // Получаем ссылку на элемент <body>
  const bodyElement = document.querySelector("body");

  // Получаем ссылки на все элементы с классом .task-item
  const taskItems = document.querySelectorAll(".task-item");

  // Получаем ссылки на все элементы с тегом button
  const buttons = document.querySelectorAll("button");

  // Функция для изменения темы
  function toggleTheme() {
    // Проверяем текущую тему
    const isDarkTheme = bodyElement.classList.contains("dark-theme");

    // Если текущая тема - темная, переключаем на светлую
    if (isDarkTheme) {
      bodyElement.classList.remove("dark-theme");
      bodyElement.style.background = "initial";

      taskItems.forEach((taskItem) => {
        taskItem.style.color = "initial";
      });

      buttons.forEach((button) => {
        button.style.border = "none";
      });
    } else {
      // Если текущая тема - светлая, переключаем на темную
      bodyElement.classList.add("dark-theme");
      bodyElement.style.background = "#24292E";

      taskItems.forEach((taskItem) => {
        taskItem.style.color = "#ffffff";
      });

      buttons.forEach((button) => {
        button.style.border = "1px solid #ffffff";
      });
    }
  }

  // Добавляем обработчик события для кнопки Tab
  tabButton.addEventListener("click", toggleTheme);
});
