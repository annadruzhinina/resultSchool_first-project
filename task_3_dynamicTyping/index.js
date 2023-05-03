let ageOfPerson1 = 18;
let ageOfPerson2 = "20";
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2);

const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "Java";
console.log(
  "A const variable cannot be redefined " +
    " 1-" +
    bestProgrammingLanguage1 +
    " 2-" +
    bestProgrammingLanguage2
);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2);

console.log("var is deprecated");
let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2);

let helloText1 = "Hello!";
let helloText2 = "Привет!";
helloText2 = helloText1;
console.log(helloText2);
