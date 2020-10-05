import BookDAO from "../app/dao/Book.js"
import Book from "../app/models/Book.js"
import Author from "../app/models/Author.js"
import Category from "../app/models/Category.js"

describe("Teste para Busca de Livro", () => {
  const bookDAO = new BookDAO()
  const author = new Author("Ana", "ana@gmail.com")
  const category = new Category("Design")
  const book = new Book(
    "Design UX/UI",
    "Esse livro é sobre Design UX/UI",
    "Sumário",
    150,
    "978-85-13176-08-9",
    author,
    category,
    40,
    "12"
  )

  bookDAO.add(book)

  it("O livro não foi encontrado", () => {
    expect(bookDAO.search("Design UX/UI")).toMatch("Não foi encontrado")
  })

  it("O livro não foi encontrado", () => {
    expect(bookDAO.search("Devops")).toMatch("Não foi encontrado")
  })

  it("A busca não pode ser feita com campo vazio", () => {
    expect(bookDAO.search(" ")).toMatch("Não foi encontrado")
  })

  it("A busca precisa ser feita acima de dois caracteres", () => {
    expect(bookDAO.search("D ")).toMatch("Não foi encontrado")
  })
})
