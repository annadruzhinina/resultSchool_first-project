const citiesRussia = ["Moscow", "St.Peterburg", "Kazan", "Sochi"];
const cityEurope = ["Paris", "Prague", "Milan"];

const citiesRussiaPopulation = {
  Moscow: 20,
  StPeterburg: 8,
  Kazan: 5,
  Sochi: 2,
};
const cityEuropePopulation = {
  Paris: 2,
  Prague: 5,
  Milan: 3,
};

// Spread разварачивает массив и получам строки
console.log(...citiesRussia);

const allCities = [...citiesRussia]; //make a clone of citiesRussia
console.log(allCities);

const allCities2 = [...citiesRussia, "Washington", ...cityEurope];
console.log("allCities2", allCities2);

const allCities3 = citiesRussia.concat(cityEurope);
console.log(allCities3);

// Spread and Objects
console.log({ ...citiesRussiaPopulation });
console.log({ ...citiesRussiaPopulation, ...cityEuropePopulation });

// Practice
numbers = [5, 37, 42, 17];
console.log(Math.max(5, 37, 42, 17));
console.log(Math.max(numbers)); //NaN
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers)); // Old function кгда не было  spread

const divs = document.querySelectorAll("div");
const nodes = [...divs];
console.log(divs, Array.isArray(divs)); // false
console.log(divs, Array.isArray(nodes)); // true

// Rest отлчие от Spread это область применения Rest собирает все параметры

function sum(a, b, ...rest) {
  // here ... is rest
  console.log(rest); // [3,4,5]
  //   return a + b;
  return a + b + rest.reduce((a, i) => a + i, 0); // a accumulator, i итеррируемый элемент
}

const num = [1, 2, 3, 4, 5];
// Spread
console.log(sum(...num)); // result 3 because we work only with 2 numbers a & b = 1+2=3

// Rest practice

// const a = num[0];
// const b = num[1];
// console.log(a, b);

const [a, b, ...other] = num; // деструктиризация
console.log(a, b, other);

const person = {
  name: "anna",
  age: 20,
  city: "NY",
  country: "USA",
};

const { name, age, ...otherInfo } = person;
console.log(person);
