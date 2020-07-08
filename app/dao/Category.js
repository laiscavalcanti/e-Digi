import Category from "../models/Category.js";

export default class CategoryDAO {
  constructor() {
    this._list = [];
  }
  add(category) {
    if (!(category instanceof Category)) {
      throw new Error("O objeto não é do tipo categoria");
    }

    if (this._list.some((c) => c.name === category.name)) {
      throw new Error("A categoria já foi cadastrada");
    }
    this._list.push(category);
  }
}
