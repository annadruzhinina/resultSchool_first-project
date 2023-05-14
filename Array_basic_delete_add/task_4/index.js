//
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

// Создаем новый массив updatedPrices с обновленными ценами
const updatedPrices = prices.map((price) => price + 0.5);

// Выводим сообщение для каждого типа кофе
coffees.forEach((coffee, index) => {
  const price = updatedPrices[index];
  alert(`Кофе ${coffee} сейчас стоит ${price} евро`);
});
