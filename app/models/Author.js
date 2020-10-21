import { emailFormat, isEmpty, isNull } from "../validate.js"

export default class Author {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.date = new Date()
  }

  set name(name) {
    if (isEmpty(name) || isNull(name)) throw new Error(`O campo nome precisa ser preenchido`)
    this._name = name
  }

  set email(email) {
    if (isEmpty(email) || !email.match(emailFormat))
      throw new Error(`O campo email precisa ser preenchido com um formato válido`)
    this._email = email
  }

  get name() {
    return this._name
  }
  get email() {
    return this._email
  }
}
