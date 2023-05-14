// Function Expression

const sum = function (a, b) {
  console.log(a + b);
};
// вызов function expression  только после ее обьявления
sum(5, 10);

const name = () => {};

const sum2 = (a, b) => {
  return a + b;
};
// or
const sum3 = (a, b) => a + b;
console.log(sum2(3, 4));

// Callback function
function multiply(a, b, callback) {
  const result = a * b;
  callback(result);
}

multiply(5, 2, (multiplyResult) => {
  console.log("multiplyResult", multiplyResult);
});
