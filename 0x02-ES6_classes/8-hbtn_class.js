// Implementing HolbertonClass class with size and location:
// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Casting to number
  valueOf() {
    return this._size;
  }

  // casting to string
  toString() {
    return this._location;
  }
}