// Implementing class Pricing that inherits from Currency.

import Currency from './currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof currency !== 'string') {
      throw new TypeError('Currency must be a string');
    }

   this._amount = amount;
   this._currency = currency;   
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency !== 'string') {
      throw new TypeError('Currency must be a string');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${Currency._name} (${Currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
