/** implement a class called Currency */

export default class Currency {
  /** - Constructor attributes
   * code (String)
   * name (String */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /** implement a getter and a setter for each value */

  /** getter for code */
  get code() {
    return this._code;
  }

  /** setter for code */
  set code(newCode) {
    this._code = newCode;
  }

  /** getter for name */
  get name() {
    return this._name;
  }

  /** setter for name */
  set name(value) {
    this._name = value;
  }

  /** method to display full currency */
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
