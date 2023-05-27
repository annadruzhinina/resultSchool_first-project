// Инкапсуляция
// public
// private
class Developer {
  #salary;
  constructor(name, programmingLanguage) {
    this.name = name;
    this.programmingLanguage = programmingLanguage;
    this.#salary = 3000; //make it private
  }

  get devSalary() {
    return this.#salary;
  }

  set setSalary(salary) {
    this.#salary = salary;
  }

  startCoding() {
    console.log(`Salary ${this.#salary}`);
    console.log(`${this.name} started coding`);
  }
  #printProgrammingLanguage() {
    // private metod
    console.log(`Programming language ${this.printProgrammingLanguage}`);
  }
}

const developer = new Developer("Anna", "JS");
console.log(developer);
console.log(developer.name);
console.log(developer.programmingLanguage);
developer.startCoding();
console.log("devSalary", developer.devSalary);
developer.setSalary = 5000;
console.log("devSalary", developer.devSalary);

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage);
  }
}

const juniorDeveloper = new JuniorDeveloper("Lena", "JS");
// juniorDeveloper.printProgrammingLanguage();

// console.log(developer.#salary);
