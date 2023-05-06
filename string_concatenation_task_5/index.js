const userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = parseInt(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = parseInt(prompt("Введите индекс, которым нужно закончить обрезку строки"));

const resultString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);
