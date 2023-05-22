function getDateFormat(date, separator = ".") {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${day}${separator}${month}${separator}${year}`;
}

const currentDate = new Date();
const formattedDate = getDateFormat(currentDate, ".");
console.log(formattedDate); // Пример вывода: "21.05.2023"
