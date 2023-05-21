// Destruction
function calcValues(a, b) {
  return [a + b, , a * b, a / b];
}

// console.log(calcValues(42, 10));

const [sum, sub = "Not a sub", ...other] = calcValues(42, 10);
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result;
// console.log(sub, sum, other);

const person = {
  name: "anna",
  age: 20,
  address: {
    country: "Rus",
    city: "Moscow",
  },
};

const {
  name: firstName = "No name",
  age,
  address: { city },
  car = "no car",
} = person;
console.log(firstName, age, car, city);

const { name, ...info } = person;

console.log(name, info);

// Practice

function logPersom({ name: firstName, age }) {
  console.log(firstName + "" + age);
}
console.log(person);
