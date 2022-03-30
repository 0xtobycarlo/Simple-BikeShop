/*
### Shop
PROPERTIES
- bikes | []

METHODS
- add(bike) | bike
- workingBikes | @array[bike]

### Bike
PROPERTIES
- working | true

METHODS
- isWorking | @Boolean (reader method)
- setWorking(@Boolean) (setter method)
*/

class Shop {
  constructor() {
    this.bikes = [];
  }

  add(bike) {
    this.bikes.push(bike);
    return bike;
  }

  workingBikes() {
    const filteredBikes = [];
    for (let i = 0; i < this.bikes.length; i++) {
      if (this.bikes[i].isWorking()) {
        filteredBikes.push(this.bikes[i]);
      }
    }
    return filteredBikes;
  }
}

module.exports = Shop;
