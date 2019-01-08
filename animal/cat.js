// EXTENDS

const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }

  static typeOfSpecies() {
    return
  }
}

module.exports = Cat;
