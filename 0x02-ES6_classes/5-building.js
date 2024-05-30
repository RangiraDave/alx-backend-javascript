// Implementing class Building.
// Each classing iniheriting it, must be overiding evacuationWarningMessage method.

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    }
  }

  evacuationWarningMessage() {
    return `Everyone inside! Get out of the ${this.constructor.name}!`;
  }
}
