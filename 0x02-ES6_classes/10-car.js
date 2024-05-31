// Implementing calss Car with cloneCar method that returns a new object of class

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

//   get brand() {
//     return this[brandSymbol];
//   }

//   get motor() {
//     return this[motorSymbol];
//   }

//   get color() {
//     return this[colorSymbol];
//   }

  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    const clone = new Species();
    return clone;
  }

  static get [Symbol.species]() {
    return this;
  }
}
