const dev = {
  name: "Anna",
  job: "FrontEnd developer",
  experience: 24,
  jobAllInfo: {
    type: "FrontEnd",
    framework: "ReactJS",
  },
};

console.log(dev);

// 1

console.log("name: ", dev.name);
console.log("job: ", dev.job);
console.log("jobAll: ", dev.jobAllInfo);
console.log("name: ", dev["name"]);
console.log("type: ", dev.jobAllInfo.type);
console.log("type: ", dev["jobAllInfo"]["type"]);

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
//  Add , Delete, Update
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

const student = {
  id: 1,
  programmingLanguage: "JS",
  hasExperianceInReact: false,
};
// Add
student.experience = 6;
console.log("add: ", student);
// Delete
delete student.hasExperianceInReact;
console.log("delete: ", student);
// Update
student.hasExperianceInReact = true;
console.log("update: ", student);

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Object is link
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

// 7 - Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.
// 1- None Primitive Object
let name = "";

const setName = (entity, value) => {
  if (typeof entity === "object") {
    entity.name = value;
  } else {
    entity = value;
  }
};

const developer = {
  name: "Anna",
};

let developerName = "Anna";

setName(developer, "An");
setName(developerName, "An");
// console.log("developer", developer);
// console.log("developerName", developerName);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy); //True

console.log({} === {}); // false потому что разные ссылки по сути
console.log([] === []); // false

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Gеребор обьектов Создание массивов из обьектов (keys, values, entries)
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

const goodInfo = {
  id: 1,
  price: 80,
  currency: "S",
  name: "dress",
};

console.log("goodInfo", goodInfo);
// for of - перебирание обьектов

// for in - перебирание массивов
for (const key in goodInfo) {
  console.log("key", key);
  const value = goodInfo[key];
  console.log("value", value);
}
// Object.keys
const keys = Object.keys(goodInfo);
console.log(keys);
// Object.values
const values = Object.values(goodInfo);
console.log(values);
// Object.entries
const entries = Object.entries(goodInfo);
console.log(entries);
console.log(entries[0]);

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Key objects
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// key can be string | sumbol
const id = Symbol("id");
const user = {
  // [Symbol("id")]: 1,
  // [Symbol("id")]: 2,
  // [Symbol("id")]: 3,
  [id]: 1,
  name: "Anna",
  10: "1234",
  undefined: undefined,
  [false]: false,
};
console.log("user", user);
console.log(Object.keys(user));
console.log(user[id]);

//in
console.log("name" in user);
console.log(id in user);

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Unite обьединить обьекты
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
const devInfo = {
  age: 25,
  experience: 3,
};

const devExtraInfo = {
  height: 180,
  isJunior: false,
};
// First variant
const devUnionObjects = {
  ...devInfo,
  ...devExtraInfo,
};
console.log("devUnionObjects", devUnionObjects);
// Second varinat
const dev2 = Object.assign(devExtraInfo, devUnionObjects);
console.log("dev2", dev2);
