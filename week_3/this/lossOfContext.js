const user = {
  name: "anna",
  programmingLanguage: "JS",
  getName() {
    return this.name;
  },
  // arrow function dont have this
  //   getProgrammingLanguage: () => {
  //     return this.getProgrammingLanguage;
  //   },
  // };

  getProgrammingLanguage: function () {
    return this.programmingLanguage;
  },
};

console.log("getName", user.getName());

const newGetName = user.getName;
console.log("newGetName", newGetName.call(user)); // window
console.log(user.getProgrammingLanguage(user));

const car = {
  name: "Audi",
  drive() {
    console.log(this);
  },
};
car.drive();
