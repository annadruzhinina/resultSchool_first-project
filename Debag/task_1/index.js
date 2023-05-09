let health = parseInt(
  prompt('Введите число параметра "здоровье" для персонажа')
);
console.log(health, typeof health);
if (health < 0) {
  console.log("if statment", health);

  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  console.log("else");
  alert(`Параметр "здоровье" равен ${health}`);
}
