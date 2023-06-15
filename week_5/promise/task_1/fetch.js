const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const createUserElement = (user) => {
  const userElement = document.createElement("li");
  const userElementAnchor = document.createElement("a");
  userElementAnchor.href = "#";
  userElementAnchor.textContent = user;
  userElement.append(userElementAnchor);

  return userElement;
};

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader");
  const isHidden = loaderHTML.hasAttribute("hidden");
  if (isHidden) {
    loaderHTML.removeAttribute("hidden");
  } else {
    loaderHTML.setAttribute("hidden", "");
  }
};

const dataContainer = document.querySelector("#data-container");

const getAllUsers = () => {
  toggleLoader();
  const result = fetch(USERS_URL, {
    method: "GET",
  });
  console.log("result", result);
  result
    .then((response) => {
      if (!response.ok) {
        throw new Error("Get Error");
      }
      console.log(response);
      return response.json();
    })
    .then((users) => {
      console.log(users);
      users.forEach((user) => {
        const userHTML = createUserElement(user.name);
        dataContainer.append(userHTML);
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      toggleLoader();
    });
};
getAllUsers();
