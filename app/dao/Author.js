import Author from "../models/Author.js";

export default class AuthorDAO {
  constructor() {
    this._list = [];
  }

  /* save(author) {
    if (this._list.find((e) => e.email === author.email))
      throw new Error("Email já cadastrado");
    this._list.push(author);
  }*/
  uniqueEmail(email) {
    const emailAuthor = this._list.find((e) => e.email === email);
    return emailAuthor;
  }
  add(emailAuthor) {
    const duplicateEmail = this.uniqueEmail(emailAuthor.email);
    if (duplicateEmail) {
      throw new Error("email já cadastrado");
    }
    this._list.push(emailAuthor);
  }
}
