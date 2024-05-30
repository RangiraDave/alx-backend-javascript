// Implementation of Airport class with the following methods:
// name and code.
// The default string description should return the airport code.

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}