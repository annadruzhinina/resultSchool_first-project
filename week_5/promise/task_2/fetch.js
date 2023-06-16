const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const dataContainer = document.querySelector("#data-container");
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

getUsersByIds = (ids) => {
  toggleLoader();
  const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => response.json());
      return Promise.all(dataResults);
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

getUsersByIds([5, 6, 2, 1]);
