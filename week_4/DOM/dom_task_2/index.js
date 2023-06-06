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

// Функция для создания элемента задачи на основе данных
function createTaskElement(task) {
  // Создаем контейнер для задачи
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("data-task-id", task.id);

  // Создаем основной контейнер
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("task-item__main-container");

  // Создаем контейнер для основного содержимого
  const mainContent = document.createElement("div");
  mainContent.classList.add("task-item__main-content");

  // Создаем форму с чекбоксом
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

  // Добавляем текст задачи
  const taskText = document.createElement("span");
  taskText.classList.add("task-item__text");
  taskText.textContent = task.text;

  // Добавляем чекбокс и текст в основной контейнер
  mainContent.appendChild(checkboxForm);
  mainContent.appendChild(taskText);

  // Создаем кнопку удаления
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "task-item__delete-button",
    "default-button",
    "delete-button"
  );
  deleteButton.setAttribute("data-delete-task-id", task.id);
  deleteButton.textContent = "Удалить";

  // Добавляем основное содержимое и кнопку удаления в основной контейнер
  mainContainer.appendChild(mainContent);
  mainContainer.appendChild(deleteButton);

  // Добавляем основной контейнер в элемент задачи
  taskItem.appendChild(mainContainer);

  return taskItem;
}

// Отрисовываем задачи
function renderTasks() {
  // Создаем элементы задач и добавляем их в список
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
  });
}

// Вызываем функцию отрисовки задач
renderTasks();
