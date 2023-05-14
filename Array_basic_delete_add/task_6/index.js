// Вам дан массив чисел:

// const numbers = [10, 4, 100, -5, 54, 2];
// Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Решите данную задачу 4-мя способами:

// Через цикл for
// Через цикл for...of
// Через метод forEach()
// Через метод reduce()
// Для данного массива numbers сумма кубов должна равняться 1158411.

// Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как куратор примет ваш ответ, здесь будет открыто решение.

// Дедлайн для получения бонусных монет по заданию - до 14.05 включительно.

// Дедлайн для получения обратной связи от куратора по заданию - до 21.05 включительно.

// for
const numbersFor = [10, 4, 100, -5, 54, 2];
let sumFor = 0;

for (let i = 0; i < numbersFor.length; i++) {
  sumFor += Math.pow(numbersFor[i], 3);
}

console.log(sumFor); // Выводит: 1158411

// for of
const numbersForOf = [10, 4, 100, -5, 54, 2];
let sumForOf = 0;

for (let i = 0; i < numbersForOf.length; i++) {
  sumForOf += Math.pow(numbersForOf[i], 3);
}

console.log(sumForOf); // Выводит: 1158411

// forEach
const numbersforEach = [10, 4, 100, -5, 54, 2];
let sumforEach = 0;

numbersforEach.forEach(function (numberforEach) {
  sumforEach += Math.pow(numberforEach, 3);
});

console.log(sumforEach); // Выводит: 1158411

// reduce()
const numbersReduce = [10, 4, 100, -5, 54, 2];

const sumReduce = numbersReduce.reduce(function (acc, number) {
  return acc + Math.pow(number, 3);
}, 0);

console.log(sumReduce); // Выводит: 1158411
