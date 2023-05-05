// Number
let age = 18;
console.log(Number(age), Boolean(age), String(age));
// result: 18 true 18

// String
let name = "Anna";
console.log(Number(name), Boolean(name), String(name));
// result: NaN true Anna

// Boolean
let marriedStatus = true;
console.log(
  Number(marriedStatus),
  Boolean(marriedStatus),
  String(marriedStatus)
);
// result: 11 true true

// Undefined
let favoriteMovie = undefined;
console.log(
  Number(favoriteMovie),
  Boolean(favoriteMovie),
  String(favoriteMovie)
);
// result: NaN false undefined

// Null
let kids = null;
console.log(Number(kids), Boolean(kids), String(kids));
// result: 0 false null

// BigInt
let distanceMoon = 5n;
console.log(Number(distanceMoon), Boolean(distanceMoon), String(distanceMoon));
// result: 5 true 5

// Symbol
let obj = { key: "anna" }; // объект
console.log(Number(obj), Boolean(obj), String(obj));
// result: NaN true [object Object]
let arr = [1, 2, 3]; // массив
console.log(Number(arr), Boolean(arr), String(arr));
// result: NaN true 1,2,3

// Function
let func = function () {
  return 1 + 1;
};
console.log(Number(func), Boolean(func), String(func));
// result: NaN true function () {return 1 + 1;}
