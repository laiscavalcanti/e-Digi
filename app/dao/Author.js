import Author from "../models/Author.js";

export default class AuthorDAO {
  constructor() {
    this._list = [];
  }

  uniqueEmail(email) {
    const emailAuthor = this._list.find(
      (emailAuthor) => emailAuthor.email === email
    );
    if (emailAuthor instanceof Author) return emailAuthor;
  }
  add(emailAuthor) {
    const duplicateEmail = this.uniqueEmail(emailAuthor.email);
    if (duplicateEmail) {
      throw new Error(`email já cadastrado`);
    }
    this._list.push(emailAuthor);

    console.log(this._list);
  }
}
