// 1. console.log
console.log(
  "#1: " + String(console.log),
  Number(console.log),
  Boolean(console.log)
);
// 2. { name: 'Maxim' }
console.log(
  "#2: " + String({ name: "Maxim" }),
  Number({ name: "Maxim" }),
  Boolean({ name: "Maxim" })
);
// 3. Symbol('key')
const sym_str = Symbol("key");
const str_str = String(sym_str);
console.log("#3: " + str_str); // "[object Symbol]"

const sym_num = Symbol("key");
// const str_num = Number(sym_num);
// ⛔️TypeError: Cannot convert a Symbol value to a number
// console.log(str_num); // "[object Symbol]"

const sym_boolean = Symbol("key");
const str_boolean = Boolean(sym_boolean);
console.log("#3: " + str_boolean); // "[object Symbol]"

// 4. Number
console.log("#4: " + String(Number), Number(Number), Boolean(Number));
// // 5. ''
console.log("#5: " + String(""), Number(""), Boolean(""));
// // 6. 0
console.log("#6: " + String(0), Number(0), Boolean(0));
// // 7. -10
console.log("#7: " + String(-10), Number(-10), Boolean(-10));
// // 8. '-105'
console.log("#8: " + String("-105"), Number("-105"), Boolean("-105"));
