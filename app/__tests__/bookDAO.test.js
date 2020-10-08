import Book from "../app/models/Book.js"
import BookDAO from "../app/dao/Book.js"
import Author from "../app/models/Author.js"
import Category from "../app/models/Category.js"

describe("Teste para classe livro", () => {
  it("Add deve lançar erro quando Livro for undefided", () => {
    expect(() => {
      const book = undefined
      const bookDAO = new BookDAO()
      bookDAO.add(book)
      console.log("O Autor foi salvo")
    }).toThrowError(new Error("O Objeto não é do tipo Livro"))
  })

  it("Add deve lançar erro quando Livro for nulo", () => {
    expect(() => {
      const book = null
      const bookDAO = new BookDAO()
      bookDAO.add(book)
      console.log("O Autor foi salvo")
    }).toThrowError(new Error("O Objeto não é do tipo Livro"))
  })

  it("ISBN e Título de livros não podem ser iguais", () => {
    expect(() => {
      const bookDAO = new BookDAO()
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
      const author2 = new Author("Ana", "ana@gmail.com")
      const category2 = new Category("Design")
      const newBook2 = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author2,
        category2,
        2,
        "12"
      )
      bookDAO.add(newBook2)
      bookDAO.add(newBook)
    }).toThrowError()
  })

  it("Cadastro de Livros com sucesso", () => {

      const bookDAO = new BookDAO()
      const author = new Author("Pedro", "pedro@gmail.com")
      const category = new Category("Design Patterns")
      const newBook = new Book(
        "Design Patterns",
        "Esse livro é sobre Design Patterns",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
      
      bookDAO.add(newBook)
      console.log({
        list: bookDAO._list,
      })
      expect(bookDAO.books).toContainEqual(newBook);
  })
})
