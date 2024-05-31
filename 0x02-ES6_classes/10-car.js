// Implementing calss Car with cloneCar method that returns a new object of class

const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  get brand() {
    return this[brandSymbol];
  }

  get motor() {
    return this[motorSymbol];
  }

  get color() {
    return this[colorSymbol];
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    const clone = new Species(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
    return clone;
  }
  static get [Symbol.species]() {
    return this;
  }
}
