const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this;
}

const domesticDog = makeDomestic.bind(dog, true)();
// Output: "Собака по имени Чарли говорит Гав-Гав"

const wildBird = makeDomestic.call(bird, false);
// Output: "Воробей по имени Петя говорит Чик-чирик"
