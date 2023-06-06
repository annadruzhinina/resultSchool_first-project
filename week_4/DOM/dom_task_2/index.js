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
];

const taskList = document.querySelector(".tasks-list");

tasks.forEach((task) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("data-task-id", task.id);

  const taskMainContainer = document.createElement("div");
  taskMainContainer.classList.add("task-item__main-container");

  const taskMainContent = document.createElement("div");
  taskMainContent.classList.add("task-item__main-content");

  const checkboxForm = document.createElement("form");
  checkboxForm.classList.add("checkbox-form");

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox-form__checkbox");
  checkbox.type = "checkbox";
  checkbox.id = "task-" + task.id;

  const label = document.createElement("label");
  label.setAttribute("for", "task-" + task.id);

  const taskText = document.createElement("span");
  taskText.classList.add("task-item__text");
  taskText.textContent = task.text;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "task-item__delete-button",
    "default-button",
    "delete-button"
  );
  deleteButton.setAttribute("data-delete-task-id", task.id);
  deleteButton.textContent = "Удалить";

  checkboxForm.appendChild(checkbox);
  checkboxForm.appendChild(label);
  taskMainContent.appendChild(checkboxForm);
  taskMainContent.appendChild(taskText);
  taskMainContainer.appendChild(taskMainContent);
  taskMainContainer.appendChild(deleteButton);
  taskItem.appendChild(taskMainContainer);
  taskList.appendChild(taskItem);
});
