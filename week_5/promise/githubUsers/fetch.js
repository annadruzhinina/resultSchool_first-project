fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json();
  })
  .then((data) => {
    outputTable(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });

function outputTable(users) {
  const table = document.createElement("table");

  for (const user of users) {
    const row = table.insertRow();

    const column1 = row.insertCell();
    column1.innerHTML = `<img class="avatar" src="${user.avatar_url}" />`;

    const column2 = row.insertCell();
    column2.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
  }

  document.body.append(table);
}
