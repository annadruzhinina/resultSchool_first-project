correctAnswers = 0;
incorrectAnswers = 0;

//questons set

let question_1 = Number(prompt("Сколько будет 2 + 2?"));

if (question === 2) {
  debugger;
  correctAnswers++;
} else {
  incorrectAnswers++;
}
let question_2 = Number(prompt("Сколько будет 2 * 2?"));

if (question_2 === 4) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}
let question_3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  )
);

if (question_3 === 1) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}
let question_4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  )
);

if (question_4 === 2) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}
let question_5 = Number(prompt("Сколько будет 2 + 2 * 2?"));

if (question_5 === 6) {
  correctAnswers++;
} else {
  incorrectAnswers++;
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`
);
