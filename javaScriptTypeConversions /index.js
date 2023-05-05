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
let obj_ = { key: "anna" }; // объект
console.log(Number(obj_), Boolean(obj_), String(obj_));
// result: NaN true [object Object]
let arr_ = [1, 2, 3]; // массив
console.log(Number(arr_), Boolean(arr_), String(arr_));
// result: NaN true 1,2,3

// Function
let func_ = function () {
  return 1 + 1;
};
console.log(Number(func_), Boolean(func_), String(func_));
// result: NaN true function () {return 1 + 1;}

// OR
// объявление и инициализация переменных разных типов данных
let num = 42; // число
let str = "Hello, world!"; // строка
let bool = true; // булево значение
let nul = null; // значение null
let undef = undefined; // неопределенное значение
let obj = { key: "value" }; // объект
let arr = [1, 2, 3]; // массив
let func = function () {
  return "function";
}; // функция

// явное преобразование к числовому типу
console.log(Number(num)); // 42
console.log(Number(str)); // NaN
console.log(Number(bool)); // 1
console.log(Number(nul)); // 0
console.log(Number(undef)); // NaN
console.log(Number(obj)); // NaN
console.log(Number(arr)); // NaN
console.log(Number(func)); // NaN

// явное преобразование к булевому типу
console.log(Boolean(num)); // true
console.log(Boolean(str)); // true
console.log(Boolean(bool)); // true
console.log(Boolean(nul)); // false
console.log(Boolean(undef)); // false
console.log(Boolean(obj)); // true
console.log(Boolean(arr)); // true
console.log(Boolean(func)); // true

// явное преобразование к строковому типу
console.log(String(num)); // "42"
console.log(String(str)); // "Hello, world!"
console.log(String(bool)); // "true"
console.log(String(nul)); // "null"
console.log(String(undef)); // "undefined"
console.log(String(obj)); // "[object Object]"
console.log(String(arr)); // "1,2,3"
console.log(String(func)); // "function() { return "function"; }"
