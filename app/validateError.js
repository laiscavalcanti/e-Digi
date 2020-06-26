export default class ValidateError {
  constructor() {
    this._errors = [];
  }
  addErro(err) {
    this._errors.push(err);
  }
  hasErrors() {
    return this._errors.length > 0;
  }
  get errors() {
    return [...this._errors];
  }
}
