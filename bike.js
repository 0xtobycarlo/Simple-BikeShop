class Bike {
  constructor() {
    this.working = true; // hard-coded
  }

  isWorking() {
    return this.working;
  }

  setWorking(status) {
    this.working = status;
  }
}

module.exports = Bike;
