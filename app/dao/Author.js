import Author from "../models/Author.js"

export default class AuthorDAO {
  constructor() {
    this._list = []
  }

  add(author) {
    if (!(author instanceof Author)) {
      throw new Error("O objeto não é do tipo autor")
    }

    if (this._list.some(a => a.email === author.email)) {
      throw new Error("O author já existe")
    }
    this._list.push(author)
  }
}
