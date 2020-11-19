import Author from "../models/Author.js"

export default class AuthorDAO {
  constructor(db) {
    this._db = db
  }

  async add(author) {
    if (!(author instanceof Author)) {
      throw new Error(`O objeto não é do tipo autor`)
    }
    try {
      const authors = await this._db.query(`SELECT * FROM author`)

      if (authors.some(a => a.email === author.email)) {
        throw new Error(`O author já existe`)
      }
      await this._db.query(`INSERT INTO author (name, email) VALUES (?, ?)`, [author.name, author.email])
    } catch (error) {
      throw new Error(error)
    }
  }
}
