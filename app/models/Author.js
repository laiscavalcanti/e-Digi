import { mailFormat, isEmpty, isNull } from "../validate.js";

export default class Author {
  constructor(name, email) {
    this.setName(name);
    this.setEmail(email);
  }

  setName(name) {
    if (isEmpty(name) || isNull(name))
      throw new Error(`O campo nome precisa ser preenchido`);
    this._name = name;
  }

  setEmail(email) {
    if (isEmpty(email) || !email.match(mailFormat))
      throw new Error(
        `O campo email precisa ser preenchido com um formato válido`
      );
    this._email = email;
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
}
