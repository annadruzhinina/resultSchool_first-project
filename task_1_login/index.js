const existingUserLogin = "the_best_user";
const existingUserPassword = 12345678;

const userLogin = prompt("Your Login: ").trim();
const userPassword = prompt("Your Password: ").trim();

function loginPage() {
  if (
    existingUserLogin === userLogin ||
    existingUserPassword === userPassword
  ) {
    alert(`Welcome ${existingUserLogin}!`);
  } else {
    alert(`Login or Password is wrong! Could you please try on emore time`);
  }
}

loginPage();
