const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

fetch(USERS_URL)
  .then((response) => response.json())
  .then((users) => {
    const frirstUserId = users[0]?.id;
    console.log(users);
    console.log(frirstUserId);
    fetch(`${TODOS_URL}?userId=${frirstUserId}`).then((response) => {
      response
        .json()
        .then((todos) => {
          console.log("todos", todos);
        })
        .catch(() => {
          console.log("error", error);
        });
    });
  })

  .catch((error) => console.log(error));
