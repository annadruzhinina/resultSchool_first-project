// create new element

const newNavBtn = document.createElement("a");
newNavBtn.className = "main-navigation__button-item";
newNavBtn.href = "tasks-expired";
newNavBtn.dataset.buttonId = "4";
newNavBtn.textContent = "Expired Tasks";
console.log(newNavBtn);

// Add to DOM -> append

const mainNav = document.querySelector(".main-navigation");
mainNav.append(newNavBtn);

// Add to DOM -> prepend
mainNav.prepend(newNavBtn);

mainNav.insertAdjacentElement("beforebegin", newNavBtn);
mainNav.insertAdjacentElement("afterend", newNavBtn);
mainNav.insertAdjacentElement("afterbegin", newNavBtn);
