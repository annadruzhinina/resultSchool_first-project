// Function Expression
const getName1 = function (name) {
  return `Name:  ${name}`;
};
const getName2 = function (name) {
  return `Name:  ${name}`;
};
const getName3 = function (name) {
  return `Name: ${name}`;
};
console.log(getName1("Expression1"));
console.log(getName2("Expression2"));
console.log(getName3("Expression3"));

// Function Declaration

function getNameDeclaration1(name) {
  return `Name:  ${name}`;
}
function getNameDeclaration2(name) {
  return `Name:  ${name}`;
}
function getNameDeclaration3(name) {
  return `Name:  ${name}`;
}

console.log(getNameDeclaration1("Declaration1"));
console.log(getNameDeclaration2("Declaration2"));
console.log(getNameDeclaration3("Declaration3"));

// Arrow Function

const getNameArrow1 = (name) => {
  name;
};
const getNameArrow2 = (name) => {
  name;
};
const getNameArrow3 = (name) => {
  name;
};
console.log(getNameArrow1("getNameArrow1"));
console.log(getNameArrow2("getNameArrow2"));
console.log(getNameArrow3("getNameArrow3"));
