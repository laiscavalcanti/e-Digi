import Book from "../models/Book.js"
import { isEmpty, maxLength } from "../utils/validate.js"
import ValidateErrors from "../utils/validateErrors.js"

export default class BookDAO {
  constructor(conn) {
    this._conn = conn
  }

 async add(book) {
    if (!(book instanceof Book)) {
      throw new Error(`O Objeto não é do tipo Livro`)
    }
    try {
      const books = await this._conn.query(`SELECT * FROM book`)

      if(books.some(b => b.title === book.title)){
        throw new Error(`Já existe um cadastro de livro com esse título!`)
      }
      const result  = await this._conn.query(`INSERT INTO book (
        author_id, category_id, title, resume, summary, number_of_pages,
        isbn, edition, price) VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [book.author.id, book.category.id, book.title, book.title, book.summary, book.number_of_pages,
          book.isbn, book.edition, book.price])
          console.log(result.insertId);
    } catch(error){
      throw new Error(error)
    }
    /*const validatedBook = this.validationBook(book)
    if (validatedBook.hasErrors()) {
      throw validatedBook.errors
    }
    this._list.push(book)*/
  }
  /*hasTitle(book) {
    return this._list.some(b => b.title === book.title)
  }
  hasIsbn(book) {
    return this._list.some(b => b.isbn === book.isbn)
  }*/

  /*validationBook(book) {
    const validate = new ValidateErrors()

  
    if (this.hasTitle(book)) {
      validate.addError(new Error(`Já existe um cadastro de livro com esse título!`))
    }
    if (this.hasIsbn(book)) {
      validate.addError(new Error(`Já existe um livro cadastrado com esse ISBN!`))
    }
    return validate
  }*/

  /*async search(title) {
    if (isEmpty(title)) {
      throw new Error("A busca do livro precisa ter no minimo 2 letras")
    }

    const books = this._list.filter(e => e.title.includes(title))
    if (books.length < 1) {
      throw new Error("Não foi encontrado")
    }
    return books
  }*/

  
}
