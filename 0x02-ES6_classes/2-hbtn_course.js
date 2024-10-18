/** Implement a class named HolbertonCourse */

export default class HolbertonCourse {
  /** Constructor attributes:
name (String)
length (Number)
students (array of Strings) */
  constructor(name, length, students) {
    /** verifying types of objects  */
    /** verifying types of objects  */
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /** getter for name */
  get name() {
    return this._name;
  }

  /** setter for name */
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  /** getter for length */
  get length() {
    return this._length;
  }

  /** setter for length */
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    }
  }

  /** getter for students */
  get students() {
    return this._students;
  }

  /** setter for students */
  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    }
  }
}
