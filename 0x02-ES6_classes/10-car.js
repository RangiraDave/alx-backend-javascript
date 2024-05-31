// Implementing class Car with cloneCar method that returns a new object of class

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const objSpecies = this.constructor[Symbol.species] || this.constructor;
    const clone = new objSpecies();
    return clone;
  }

  static get [Symbol.species]() {
    return this;
  }
}
