class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    technologies = [];
  }
  code() {}
  learnMewTechnologies(technology) {
    this.technologies.push(technology);
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age);
    this.position = "Junior";
    this.technologies = ["HTML", "CSS", "JavaScript"];
  }
  code() {
    console.log(`${this.position} developer coding `);
  }
}
