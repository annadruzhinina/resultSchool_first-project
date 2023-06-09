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
makeDomestic.bind(dog, true)();
// Выводит: "Собака по имени Чарли говорит Гав-Гав"
// Возвращает: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
const dogResult = makeDomestic.bind(dog, true)();
console.log(dogResult);

makeDomestic.call(bird, false);
// Выводит: "Воробей по имени Петя говорит Чик-чирик"
// Возвращает: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
const birdResult = makeDomestic.bind(bird, true)();
console.log(dogResult);

makeDomestic.apply(bird, [false]);
// Выводит: "Воробей по имени Петя говорит Чик-чирик"
// Возвращает: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
