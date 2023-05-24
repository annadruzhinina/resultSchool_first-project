// this -object это ключевое слово которо указывает на текуший контекст выполнения кода
console.log(this); // Google Chrome -window

const user = {
  name: "Anna",
  dateOfBirth: 1986,
  getName() {
    return this.name;
  },
  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth;
  },
  getAllInfo: function () {
    const age = this.calculateAge();
    console.log(`Name: ${this.name}, 'Age:' ${age}`);
  },
};

console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo();

// bind, call, apply
const user2 = {
  name: "Liza",
};
const user2Name = user.getName.call(user2);
console.log("user2Name", user2Name);


