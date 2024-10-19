/** class called airport */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  /** getters and setters */

  /** getter for name */
  get name() {
    return this._name;
  }

  /** setter for name */
  set name(value) {
    this._name = value;
  }

  /** getter for code */
  get code() {
    return this._code;
  }

  /** setter for code */
  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
