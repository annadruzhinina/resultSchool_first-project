const myName = "Anna";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Course Creater Name";
const reasonText = "Get new knowledge";
const numberOfMonth = "8 months";

let myInfoText = `${myName} ${programmingLanguage} ${courseCreatorName} ${reasonText} ${numberOfMonth}`;

// Task 1
console.log(
  `${myName} ${programmingLanguage} ${courseCreatorName} ${reasonText} ${numberOfMonth}`
);

console.log(
  myName +
    " " +
    programmingLanguage +
    " " +
    courseCreatorName +
    " " +
    reasonText +
    " " +
    numberOfMonth
);

// Task 2
console.log(myInfoText.replaceAll("JavaScript", "javascript"));
console.log(myInfoText.toUpperCase("Course", "course"));
// Task 3
console.log(myInfoText);
// Task 4
console.log(myInfoText.length);
// Task 5
console.log(
  "First letter: " +
    myInfoText[0] +
    ", " +
    "Last letter: " +
    myInfoText[myInfoText.length - 1]
);
