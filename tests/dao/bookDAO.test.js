import Book from "../../src/models/Book.js"
import AuthorDAO from "../../src/dao/Author.js"
import CategoryDAO from "../../src/dao/Category.js"
import BookDAO from "../../src/dao/Book.js"
import Author from "../../src/models/Author.js"
import Category from "../../src/models/Category.js"
import Connection from "../../src/config/Connection.js"

describe("Teste para classe livro", () => {
  let conn = new Connection()

  beforeAll(async () => {
    await conn.conect()
  });

  afterAll(async () => {
    await conn.close();
  })

  it("Add deve lançar erro quando livro for null", async () => {
    const bookDAO = new BookDAO(conn)
    const book = null
    await expect(bookDAO.add(book)).rejects.toThrow(`O Objeto não é do tipo Livro`)
  })

  it("Add deve lançar erro quando livro for undefined", async () => {
    const bookDAO = new BookDAO(conn)
    const book = undefined
    await expect(bookDAO.add(book)).rejects.toThrow(`O Objeto não é do tipo Livro`)
  })


  it("Adicionando um livro com sucesso", async () => {
    const categoryDAO = new CategoryDAO(conn)
    const authorDAO = new AuthorDAO(conn)
    const bookDAO = new BookDAO(conn)
    const author = new Author("Ana", "ana@gmail.com")
    const category = new Category("Design")
    await categoryDAO.add(category)
    await authorDAO.add(author)
    const book = new Book(
      author,
      category,
      "Design UX/UI",
      "Esse livro é sobre Design",
      "Sumário",
      40,
      "978-85-13196-08-9",
      50,
      "12"
    )
    await bookDAO.add(book)
    expect(book).toBeDefined()
  })


  /*it("Add deve lançar erro quando Livro for nulo", () => {
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
  })*/
})
