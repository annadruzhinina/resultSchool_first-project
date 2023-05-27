// Полиморфизм это одно действие и несколо реализаций

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {}
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log("Bark-bark");
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log("Igogog");
  }
}
