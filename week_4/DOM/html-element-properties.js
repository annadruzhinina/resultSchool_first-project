// получение значения класса

const taskWrapper = document.querySelector(".tasks__wrapper");
console.log(taskWrapper.className);

// taskWrapper.className = ".tasks__wrapper_1";
console.log(taskWrapper.className);

const tasksBlock = document.querySelector("#tasks");
// tasksBlock.id = "#tasks_id";
console.log(tasksBlock.id);

const submitBtn = document.querySelector(".create-task-block__button");

console.log(submitBtn.innerText);
console.log(submitBtn.textContent);

submitBtn.textContent = "<b>Create new Task</b>"; // doesn't work
submitBtn.innerHTML = "<b>Create new Task</b>";

// get all GTML - innerHTML

console.log(tasksBlock.innerHTML);

// delete
// tasksBlock.innerHTML = "";
// tasksBlock.innerHTML = "<b>tasksBlock</b>";

// Children (only for read)

const createTaskForm = document.querySelector(".create-task-block");
console.log(createTaskForm.children);

// data-attributes
const firstavBtn = document.querySelector(".main-navigation__button-item");
firstavBtn.dataset.buttonId = "10";
console.log(firstavBtn.dataset.buttonId);

// style
console.log(firstavBtn.style);
firstavBtn.style.fontWeight = "bold";
firstavBtn.style.boxShadow = "inset 0 0 0 3px #fff";
firstavBtn.style.color = "grey";
