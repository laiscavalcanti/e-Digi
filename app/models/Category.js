import { isEmpty, isNull } from "../validate.js";

export default class Category {
  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (isEmpty(name) || isNull(name))
      throw new Error(`O campo categoria precisa ser preenchido`);
    this._name = name;
  }

  get name() {
    return this._name;
  }

}
