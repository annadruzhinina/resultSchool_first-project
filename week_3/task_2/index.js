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
  const newObject = {
    name: this.name,
    type: this.type,
    isDomestic: isDomestic,
    makeSound: this.makeSound(),
  };

  console.log(
    `${newObject.type} по имени ${newObject.name} говорит ${newObject.makeSound}`
  );
  return newObject;
}

const dogResult = makeDomestic.bind(dog, true)();
console.log(dogResult);

const birdResult = makeDomestic.call(bird, false);
console.log(birdResult);

const birdResult2 = makeDomestic.apply(bird, [false]);
console.log(birdResult2);
