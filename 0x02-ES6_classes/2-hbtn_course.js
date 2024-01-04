class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
  if (typeof name !== 'string') {
    throw TypeError('Name must be String');
  }
  if (typeof length !== 'number') {
    throw TypeError('Leght must be a Number');
  }
  if (typeof students !== 'object') {
    throw TypeError('Students must be an Array');
  }
  for (const student of students){
    if (typeof student != 'string') {
      throw TypeError('Student must be a String');
    }
  }
  this._name = name;
  this._length = length;
  this._students = students;
  }

    get name() {
    return this._name;
  }

  set length(length = 0) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students = []) {
    if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw TypeError('Student must be a string');
      }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
export default HolbertonCourse;
