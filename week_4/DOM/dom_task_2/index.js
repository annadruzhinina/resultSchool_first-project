const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
  {
    id: "1138465078064",
    completed: false,
    text: " TEST Выполнить ДЗ после урока",
  },
];

// Получаем ссылку на элемент .tasks-list
const tasksList = document.querySelector(".tasks-list");


function createTaskElement(task) {

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("data-task-id", task.id);

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("task-item__main-container");


  const mainContent = document.createElement("div");
  mainContent.classList.add("task-item__main-content");


  const checkboxForm = document.createElement("form");
  checkboxForm.classList.add("checkbox-form");
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox-form__checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `task-${task.id}`);
  const label = document.createElement("label");
  label.setAttribute("for", `task-${task.id}`);
  checkboxForm.appendChild(checkbox);
  checkboxForm.appendChild(label);


  const taskText = document.createElement("span");
  taskText.classList.add("task-item__text");
  taskText.textContent = task.text;

  mainContent.appendChild(checkboxForm);
  mainContent.appendChild(taskText);


  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "task-item__delete-button",
    "default-button",
    "delete-button"
  );
  deleteButton.setAttribute("data-delete-task-id", task.id);
  deleteButton.textContent = "Удалить";

   mainContainer.appendChild(mainContent);
  mainContainer.appendChild(deleteButton);

  taskItem.appendChild(mainContainer);

  return taskItem;
}


function renderTasks() {

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
}

// Вызываем функцию отрисовки задач
renderTasks();
