/** Implement a class named HolbertonCourse */

export default class HolbertonCourse {
  /** Constructor attributes:
name (String)
length (Number)
students (array of Strings) */
  constructor(name, length, students) {
    /** verifying types of objects  */
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (typeof students === 'object') {
      this._students = students;
    }
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
