import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft); /** from the superclass Building */
    this._floor = floor;
  }

  /** getters and setters for above attributes */
  /** sqft getter */
  get sqft() {
    return this._sqft;
  }

  /** setter for sqft */
  set sqft(value) {
    this._sqft = value;
  }

  /** getter for floor */
  get floor() {
    return this._floor;
  }

  /** setter for floor */
  set floor(value) {
    this._floor = value;
  }

  /** overiding evacuationWarningMessage() */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}
