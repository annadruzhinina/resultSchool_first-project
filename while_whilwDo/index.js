// cicle for
for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
}
// method while

let k = 0;
while (k < 3) {
  let newStudent = prompt("While method: Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  k++;
}

// method  do while
let j = 0;
do {
  j++;
  let newStudent = prompt("Do While method: Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
} while (j < 3);
