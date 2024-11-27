import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); /** from the superclass Building */
    this._floors = floors;
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
  get floors() {
    return this._floors;
  }

  /** setter for floor */
  set floor(value) {
    this._floors = value;
  }

  /** overiding evacuationWarningMessage() */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
