/** import currency from 3-currency.js */

import Currency from './3-currency';

/** class named Pricing */

export default class Pricing {
  /** Constructor attributes:
amount (Number)
currency (Currency) */

  constructor(amount, currency) {
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    }
    this._currency = currency;
  }

  /** getters and setters */

  /** getter for amount */
  get amount() {
    return this._amount;
  }

  /** setter for amount */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /** getter for currency */
  get currency() {
    return this._currency;
  }

  /** setter for currency */
  set currency(curr) {
    if (!(curr instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = curr;
  }

  /** method named displayFullPrice that
   *  returns the attributes in the following format
   *  amount currency_name (currency_code). */
  displayFullPrice() {
    return (`${this._amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
