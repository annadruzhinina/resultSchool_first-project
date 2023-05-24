const mainHero = {
  fullName: "SpiderMan",
  health: 65,
  strength: 5,
};

const badHero = {
  fullName: "Joker",
  health: 55,
  strength: 10,
};

function printHeroInfro(extraInfo) {
  console.log(
    `Name: ${this.fullName} Health: ${this.health} Strength: ${this.strength} ${extraInfo}`
  );
}

printHeroInfro(); //undefined
// difference between call and apply how we pass extro parametr
printHeroInfro.call(mainHero, "role main hero");
printHeroInfro.apply(mainHero, ["role main hero"]);
// bind create new fucntion with new context
const bindedPrintHeroInfro = printHeroInfro.bind(mainHero, "role bad hero");
bindedPrintHeroInfro();
// printHeroInfro.call(badHero);
