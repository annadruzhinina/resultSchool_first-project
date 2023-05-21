// Date
const date = new Date();
console.log(date);

// new Data(year, month, date, hours, miutes, seconds)
// 0 Jan 11 Dec
const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log(newDate);
console.log("year", newDate.getFullYear());
console.log("month", newDate.getMonth());
console.log("date", newDate.getDate());
console.log("hou", newDate.getDate());

// Дни недели
// 0 Sunday - 6 Sartuday

console.log("day", newDate.getDay());
if (newDate.getDay() === 4) {
  console.log("Today is Thursday");
}

// Update data
newDate.setFullYear(2001);
console.log(newDate);
