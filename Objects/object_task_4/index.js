function giveJobToStudent(student, jobName) {
  const studentInfo = { ...student, jobName };
  return studentInfo;
}

const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
// console.log(updatedStudent);
alert(
  `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${updatedStudent.jobName} `
);
// console.log(updatedStudent.jobName);
