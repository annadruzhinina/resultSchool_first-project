let health = prompt('Введите число параметра "здоровье" для персонажа');
if (health < 0 || health) {
  console.log("if statment");

  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  console.log("else");
  alert(`Параметр "здоровье" равен ${Health}`);
}
