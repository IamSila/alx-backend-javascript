export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /** getter for size */
  get size() {
    return this._size;
  }

  /** setter for size */
  set size(value) {
    this._size = value;
  }

  /** getter for location */
  get location() {
    return this._location;
  }

  /** setter for location */
  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
