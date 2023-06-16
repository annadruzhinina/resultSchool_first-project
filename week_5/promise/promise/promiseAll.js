// Promise.all([new Promise(), new Promise(), new Promise(), new Promise()]);

// fulfiled - if all promises will be done without reject
// rejected - if at least one promise will be reject

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const todosIds = [43, 5, 1, 50, 100, 101];
const dataContainer = document.querySelector("#data-container");
const createTodoElement = (text) => {
  const todoElemnt = document.createElement("li");
  const todoElementAnchor = document.createElement("a");
  todoElementAnchor.href = "#";
  todoElementAnchor.textContent = text;
  todoElemnt.append(todoElementAnchor);

  return todoElemnt;
};

getAllTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => response.json());
      return Promise.all(dataResults);
    })
    .then((todos) => {
      console.log(todos);
      todos.forEach((todo) => {
        const todoHTML = createTodoElement(todo.title);
        dataContainer.append(todoHTML);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getAllTodosByIds(todosIds);
