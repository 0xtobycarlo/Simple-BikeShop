const Bike = require("../src/bike.js");

describe("bike", () => {
  it("is working by default", () => {
    // setup
    const bike = new Bike(); // instantiating the Bike class
    // execute, verify
    expect(bike.isWorking()).toEqual(true);
  });

  it("can set working to false", () => {
    const bike = new Bike();
    bike.setWorking(false);
    expect(bike.isWorking()).toEqual(false);
  });
});
