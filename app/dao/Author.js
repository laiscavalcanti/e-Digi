import Author from "../models/Author.js";

export default class AuthorDAO {
  constructor() {
    this._list = [];
  }

  save(author) {
    console.log(author);
    if (this._list.find((e) => e.email === author.email))
      throw new Error("Email já cadastrado");
    this._list.push(author);
    console.log(this._list);
  }
}
