const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    this.level++;
    if (student.level === 2) {
      this.stack.push("CSS");
    } else if (this.level === 3) {
      this.stack.push("JavaScript");
    } else if (this.level === 4) {
      this.stack.push("React");
    } else if (this.level === 5) {
      this.stack.push("NodeJS");
    }
    if (this.level > 5) {
      alert("Студент выучил все технологии!");
    }
    return this;
  },
};
student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(student.stack);
