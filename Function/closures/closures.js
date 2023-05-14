// замыкание
const createMultiplayer = function (n) {
  return function () {
    return n * 10;
  };
};

// const multiply = createMultiplayer(5);
// const result = multiply();
// console.log(result);

const createCounter = (initialValue = 0) => {
  return (valueToAdd) => {
    return initialValue + valueToAdd;
  };
};

const addFive = createCounter(5);
const result = addFive(10);
console.log(result);

// Замыкание
const createCounter_2 = (initialValue = 0) => {
  let counter = initialValue;

  return (valueToAdd) => {
    counter += valueToAdd;
    return counter;
  };
};
const addTwo = createCounter(2);
let resultNew = addTwo(10); //12
resultNew = addTwo(5); //17
resultNew = addTwo(3); //20
console.log(resultNew);
