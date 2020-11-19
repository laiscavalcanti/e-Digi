import { isEmpty, isNull } from "../utils/validate.js"

export default class Category {
  constructor(name) {
    this.name = name
  }

  set name(name) {
    if (isEmpty(name) || isNull(name)) throw new Error(`O campo categoria precisa ser preenchido`)
    this._name = name
  }
  get name() {
    return this._name
  }
}
