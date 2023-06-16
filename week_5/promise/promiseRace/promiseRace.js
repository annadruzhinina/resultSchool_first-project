// <li class="photo-item">
//   <img class="photo-item__image" src="https://via.placeholder.com/600/92c952">
//   <h3 class="photo-item__title">
//     accusamus beatae ad facilis cum similique qui sunt
//   </h3>
// </li>

const PHOTOS_URL = " https://jsonplaceholder.typicode.com/photos/";

function getFastestLoadedPhoto(ids) {
  // Create a promise for each photo id
  let promises = ids.map(function (id) {
    let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`Failed to fetch photo with id ${id}`);
        }
        return response.json();
      })
      .then(function (data) {
        return {
          id: id,
          data: data,
        };
      });
  });

  // Create a loading element
  let loadingElement = document.createElement("span");
  loadingElement.textContent = "Загрузка...";

  // Add the loading element to the data container
  let dataContainer = document.getElementById("data-container");
  dataContainer.appendChild(loadingElement);

  // Use Promise.race() to determine the fastest loaded photo
  return Promise.race(promises)
    .then(function (result) {
      // Remove the loading element
      dataContainer.removeChild(loadingElement);

      // Create the photo item HTML element
      let listItem = document.createElement("li");
      listItem.className = "photo-item";

      let image = document.createElement("img");
      image.className = "photo-item__image";
      image.src = result.data.url;

      let title = document.createElement("h3");
      title.className = "photo-item__title";
      title.textContent = result.data.title;

      listItem.appendChild(image);
      listItem.appendChild(title);

      dataContainer.appendChild(listItem);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Example usage:
getFastestLoadedPhoto([60, 12, 55]);
