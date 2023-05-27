// Наследование
class Plane {
  constructor(type, numberOfPassangers) {
    this.type = type;
    this.numberOfPassangers = numberOfPassangers;
  }
  // metod
  startFlight() {
    console.log("Lets go");
  }
}

class MilitartPlane extends Plane {
  constructor(type) {
    super(type, 0);
    this.numberOfGuns = 0;
  }
  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns;
  }

  shoot() {
    console.log("Shooting");
  }
}

// const plane = new Plane("Пассажирский", 100);
// console.log(plane);
// plane.startFlight();

const militartPlane = new MilitartPlane("military");
console.log(militartPlane);
militartPlane.startFlight();
militartPlane.setNumberOfGuns(4);
militartPlane.shoot();
console.log("militartPlane", militartPlane);

// instanceof принадлижит ли обьекто какому-то классу

console.log(militartPlane instanceof MilitartPlane); // true
console.log(militartPlane instanceof Plane); // true

// Инкапсуляция
// Полимофизм
// Абстракция
