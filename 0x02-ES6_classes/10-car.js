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
    const clone = Object.create(Object.getPrototypeOf(this));
    clone[brandSymbol] = this[brandSymbol];
    clone[motorSymbol] = this[motorSymbol];
    clone[colorSymbol] = this[colorSymbol];

    return clone;
  }
}
