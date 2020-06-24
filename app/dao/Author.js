import Author from "../models/Author.js";

export default class AuthorDAOr {
  constructor() {
    this._list = [];
  }

  uniqueEmail(email) {
    const emailAuthor = this._list.find(
      (emailAuthor) => emailAuthor.email === email
    );
    return emailAuthor;
  }
  add(emailAuthor) {
    const duplicateEmail = this.uniqueEmail(emailAuthor.email);
    if (duplicateEmail instanceof Author) {
      throw new Error(`email já cadastrado`);
    }
    this._list.push(emailAuthor);

    console.log(this._list);
    console.log(emailAuthor instanceof Author);
  }
}
