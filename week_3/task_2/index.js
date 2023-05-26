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
  this.isDomestic = isDomestic;
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this;
}

const domesticDog = makeDomestic.bind(dog, true)();

const wildBird = makeDomestic.call(bird, false);

makeDomestic.bind(dog)();

makeDomestic.call(dog);

makeDomestic.apply(dog);
