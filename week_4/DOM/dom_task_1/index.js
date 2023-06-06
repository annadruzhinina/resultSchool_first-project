// ✅ innerHTML

const formHTML = `
<form class="create-user-form">
    <label>
        Name
        <input type="text" name="userName" placeholder="Input your Name">
    </label>
    <label>
        Password
        <input type="password" name="password" placeholder="Create Password"
    <button type="submit">
        Submit
    </button>
</form>
`;

// Add HTML-code into body tag
document.body.innerHTML = formHTML;

//✅ document.createElement()

const body = document.querySelector("body");

const form = document.createElement("form");
form.className = "create-user-form";
console.log(form);

const labelName = document.createElement("label");
labelName.textContent = "Name";
// console.log(labelName);

const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Input your Name";
// console.log(inputName);

// Add input into label
labelName.appendChild(inputName);

const labelPassword = document.createElement("label");
labelPassword.textContent = "Password";
// console.log(labelPassword);

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Create password";
// console.log(inputPassword);

// Add input into label
labelPassword.appendChild(inputPassword);

const button = document.createElement("button");
button.type = "submit";
button.innerText = "Submit";

// Add labels and button into form
form.insertAdjacentElement("afterbegin", labelPassword);
form.insertAdjacentElement("afterbegin", labelName);
form.insertAdjacentElement("beforeend", button);
body.insertAdjacentElement("afterbegin", form);
