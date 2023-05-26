class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPersonAge) {
    if (this.age < otherPersonAge.age) {
      return `${this.name} младше, чем ${otherPersonAge.name}`;
    } else if (this.age > otherPersonAge.age) {
      return `${this.name} старше, чем ${otherPersonAge.name}`;
    } else {
      return `${this.name} и ${otherPersonAge.name} одного возраста`;
    }
  }
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);

console.log(person1.compareAge(person2)); // Максим младше, чем Светлана
console.log(person2.compareAge(person3)); // Светлана старше, чем Ирина
console.log(person3.compareAge(person1)); // Ирина младше, чем Максим
