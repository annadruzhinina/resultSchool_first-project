// Object oriantation language

// Function
// function Animal(name) {
//   this.name = name;

//   this.getName = function () {
//     return this.name;
//   };
// }

//Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  // Metod (в классах функциях называются методами)
  getName() {
    return this.name;
  }
}

// new
// const result = Animal("cat"); // undefind
const cat = new Animal("cat"); // cat
// console.log(cat.name);
// console.log(cat.getName());

const dog = new Animal("dog");
console.log(dog);
