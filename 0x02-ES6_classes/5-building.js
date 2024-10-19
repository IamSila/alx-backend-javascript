/** a class called Building */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
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

}
