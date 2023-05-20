//Вам дан массив пользователей users. У каждого из них есть свойство status, которое может равняться или "online", или "offline":
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
// Вам необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей, у которых status равен "online".
// let count = Object.keys(users).length;
// console.log(count);
const usersOnlineNames = users.filter((user) => user.status === "online");
let count = Object.keys(usersOnlineNames).length;
console.log(count);
console.log(usersOnlineNames);
const names = [];
for (let i = 0; i < count; i++) {
  
  names = usersOnlineNames[i].username;
}
alert(`Сейчас в онлайн следующие пользователи: ${name}`);

// const usersOnlineNames = users.filter((user) => user.status === "online");
// let names = usersOnlineNames.map((user) => user.username).join(", ");
// alert(`Сейчас в онлайн следующие пользователи: ${names}`);

// После выведите через alert() сообщение: “Сейчас в онлайн следующие пользователи: usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей отображаются через запятую.

// Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие пользователи: David, Bob”.

// Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа в задании #5. После того как куратор примет ваш ответ, здесь будет открыто решение.

// Дедлайн для получения бонусных монет по заданию - до 21.05 включительно.

// Дедлайн для получения обратной связи от куратора по заданию - до 28.05 включительно.
