// Вам необходимо исправить данный код, используя bind(), call() и apply():

// Функцию attack() необходимо исправить при помощи bind() + нужно вспомнить особенность стрелочных функций (нет своего this).
// Функцию score() - при помощи call().
// Функцию substitute() - при помощи apply().

const footballer = {
  fullName: "Cristiano Ronaldo",

  attack: () => {
    console.log(`${footballer.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal: function (sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate: function (sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  },
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);
