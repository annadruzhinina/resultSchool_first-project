// to UpperCase
let animal = "Lion";
let animal2 = "Lion";
console.log("upper ", animal.toUpperCase());
console.log("upper ", animal2.toLowerCase());

//Find symbols
const text = "I love to study JavaScript";
console.log("indexOf: ", text.indexOf("JavaScript"));
console.log("indexOf: ", text.indexOf("I"));
console.log("Includes", text.includes("JavaScript"));

// Cut string
const programmingLanguage = "JavaScript";
console.log("slice: ", programmingLanguage.slice(1, 5));
console.log("substring: ", programmingLanguage.substring(1, 3));

// Replacing characters in a string
const programmingLanguage2 = "JavaScript";
console.log("replace: ", programmingLanguage2.replace("a", "A"));
console.log("replace: ", programmingLanguage2.replaceAll("a", "A"));

// Repeat
console.log("repeat: ", programmingLanguage.repeat(2));

// trim
const nameOfUser = prompt("What is your name?");
console.log("nameOfUser: ", nameOfUser.trim);
