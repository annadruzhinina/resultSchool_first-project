// 1st Way
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  if (peopleWaiting.length > 0) {
    const name = peopleWaiting.shift();
    alert(
      `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
}

function leaveQueueWithoutParcel() {
  if (peopleWaiting.length > 0) {
    const name = peopleWaiting.pop();
    alert(
      `${name} не получил(а) посылку и ушел(ла) из очереди. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
}

// Шаг 1: Кристина и Олег получили посылки и ушли из очереди
giveParcel();
giveParcel();

// Шаг 2: Кирилл получил посылку, остальные ушли из очереди
giveParcel();
leaveQueueWithoutParcel(); // Удаляем Кирилла из массива peopleWaiting
while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel(); // Удаляем остальных людей из очереди
}

//2nd Way

const peopleWaiting_new = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];
// Кристина и Олег получили посылки и ушли из очереди. Вам необходимо удалить их из массива.
const deleteFirstElementNew = peopleWaiting_new.shift();
const deleteSecondElementNew = peopleWaiting_new.shift();

console.log(peopleWaiting_new);
console.log(deleteFirstElementNew);
console.log(deleteSecondElementNew);

// Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв, и она успеет обслужить только Кирилла. Поэтому все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится обед, и просто ушли из отделения почты. Вам необходимо сначала удалить Кирилла из массива peopleWaiting, а затем удалить людей, которые не успели получить посылки.

while (peopleWaiting_new.length > 0) {
  peopleWaiting_new.pop();
}
console.log(peopleWaiting_new);
