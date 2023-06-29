import * as DateUtils from "../core/utils/data";

export class TimerBlock {
  #date;
  #timerContainer;
  #timerTextHTML;
  constructor(date) {
    this.#date = date;
    this.#timerContainer = document.createElement("div");
    this.#timerTextHTML = document.createElement("h2");
  }

  #getTimerContent() {
    return DateUtils.getPreciseDataDifference(new Date(), this.#date);
  }
  #enableDateUpdate() {
    setInterval(() => {
      this.#timerTextHTML.textContent = this.#getTimerContent();
    }, 1000);
  }
  render() {
    this.#timerContainer.id = "timder";
    this.#timerTextHTML.className = ".timer-text";
    this.#timerTextHTML.textContent = this.#getTimerContent();

    const todayDateHTML = document.createElement("div");
    todayDateHTML.className = "today-date";
    const todayDateFormat = DateUtils.getTodayDateFormat(new Date());
    todayDateHTML.textContent = `(Today ${todayDateFormat}) `;

    this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);
    this.#enableDateUpdate();

    return this.#timerContainer;
  }
}
