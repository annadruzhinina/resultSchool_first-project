// if
// if else
// switch case
// ? :

const isFrontendDeveloper = false;
if (isFrontendDeveloper) {
  console.log("You are Frontend Developer");
} else {
  console.log("You are not FrontEnd Developer");
}

const developerJobType = "";
if (developerJobType === "FrontEnd") {
  console.log("20000$");
} else if (developerJobType === "BackEnd") {
  console.log("30000$");
} else if (developerJobType === "FullStuck") {
  console.log("40000$");
} else {
  console.log("No information");
}

//switch case
switch (developerJobType) {
  case "FrontEnd":
    console.log("2000$");
    break;
  case "BackEnd":
    console.log("3000$");
    break;
  case "FullStack":
    console.log("4000$");
    break;
  default:
    console.log("No information");
}

// ? : замена if else
const favoriteDrink = "Coffee";
let message = "";

if (favoriteDrink === "Coffee") {
  message = "Your favorite drink is Coffee!";
} else {
  message = "You like tea";
}
console.log("Message:", message);

const message2 =
  favoriteDrink === "Coffee"
    ? "Your favorite drink is Coffee!"
    : "You like tea";
console.log("Message2:", message);
