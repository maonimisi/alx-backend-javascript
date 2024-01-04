class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be of type string');
    }
    if (typeof code !== 'string') {
      throw TypeError('Code must be of type string')
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

export default Airport;
