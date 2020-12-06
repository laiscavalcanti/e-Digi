import Author from "../models/Author.js"

export default class AuthorDAO {
  constructor(conn) {
    this._conn = conn
  }

  async add(author) {
    if (!(author instanceof Author)) {
      throw new Error(`O objeto não é do tipo autor`)
    }
    try {
      const authors = await this._conn.query(`SELECT * FROM author`)

      if (authors.some(a => a.email === author.email)) {
        throw new Error(`O author já existe`)
        
      }
      const result = await this._conn.query(
        "INSERT INTO author (name, email) VALUES (?, ?)",
        [author.name, author.email])
            author.id = result.insertId
            console.log(result.insertId)
           
    } catch (error) {
      throw new Error(error)
    }
  }


}
