import Author from "../models/Author.js";

export default class AuthorDAO {
  constructor() {
    this._list = [];
  }

  findEmail(email) {
    const author = this._list.find((author) => author.email === email);
    if (author instanceof Author) return author;
  }
  add(author) {
    const hasAuthor = this.findEmail(author.email);
    if (hasAuthor) {
      throw new Error(`email já cadastrado`);
    }
    this._list.push(author);

    console.log(this._list);
  }
}
