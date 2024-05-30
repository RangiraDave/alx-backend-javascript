// Implementing class Building.
// Each classing iniheriting it, must be overiding evacuationWarningMessage method.

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    }
  }
}
