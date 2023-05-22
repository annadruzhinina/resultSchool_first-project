// В JavaScript объект даты может принимать в себя timestamp, т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. По данному количеству миллисекунд генерируется объект даты. Благодаря этому, чтобы добавить определенное число миллисекунд, можно использовать следующую запись: new Date(Date.now() + 5000), где 5000 - это миллисекунды. В итоге мы получим дату, которая на 5000 миллисекунд больше текущей.

// Используя эти знания, вам необходимо создать функцию addDays(), которая будет добавлять переданное количество дней к переданной дате. Она принимает в себя 2 параметра:

// date - экземпляр класса Date
// days - количество дней, тип данных number
// Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. Функция addDays() должна возвращать обновленную дату.

// Подсказка: не забывайте, что timestamp, который передается в Date(), должен измеряться в миллисекундах.

// Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как куратор примет ваш ответ, здесь будет открыто решение.

// Дедлайн для получения бонусных монет по заданию - до 21.05 включительно.

// Дедлайн для получения обратной связи от куратора по заданию - до 28.05 включительно.
function addDays(date, days) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне
  const timestamp = date.getTime(); // Получаем timestamp переданной даты
  const newTimestamp = timestamp + days * millisecondsPerDay; // Увеличиваем timestamp на указанное количество дней
  const newDate = new Date(newTimestamp); // Создаем новый объект Date с обновленным timestamp
  return newDate;
}

// Пример использования
const currentDate = new Date(); // Текущая дата
const futureDate = addDays(currentDate, 5); // Добавляем 5 дней к текущей дате
console.log(futureDate);
