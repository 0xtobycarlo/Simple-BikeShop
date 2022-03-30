const Shop = require("../src/shop.js");
const Bike = require("../src/bike.js");

describe("Shop", () => {
  it("Can add a bike", () => {
    const shop = new Shop();
    const bike = new Bike();

    const storedBike = shop.add(bike);

    expect(storedBike).toEqual(bike);
    expect(shop.bikes.length).toEqual(1);
  });

  it("Can add multiple bikes", () => {
    const shop = new Shop();
    const bike = new Bike();

    shop.add(bike);
    shop.add(bike);
    shop.add(bike);

    expect(storedBike).toEqual(bike);
    expect(shop.bikes.length).toEqual(3);
  });

  fit("Can return only working bikes", () => {
    // function add(arg) {
    //   console.log(arg);
    // }

    const shop = new Shop();

    const bike1 = new Bike();
    bike1.setWorking(false);
    shop.add(bike1);

    const bike2 = new Bike();
    shop.add(bike2);

    const workingBikes = shop.workingBikes();

    expect(workingBikes.length).toEqual(1);
    expect(workingBikes[0].isWorking()).toEqual(true);
  });
});
