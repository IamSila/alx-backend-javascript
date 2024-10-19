/** a class called Building */

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number')
    }
    this._sqft = sqft;
  }

  /** getter and setter for the above */
  /** getter for sqft */
  get sqft() {
    return this._sqft;
  }

  /** setter for sqft */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
    }
    this._sqft = value;
  }

  /** a method that must be implemented by all subclasses */
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
