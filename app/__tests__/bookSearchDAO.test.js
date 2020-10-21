import BookDAO from "../dao/Book.js"
import Book from "../models/Book.js"
import Author from "../models/Author.js"
import Category from "../models/Category.js"

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
  it("É esperado um erro ao buscar por livro com campo vazio", () => {
    expect(() => {
      bookDAO.search(" ")
    }).toThrow(`A busca do livro precisa ter no minimo 2 letras`)
  })
})

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
  it("É esperado um erro ao ao procurar por livro ainda não cadastrado", () => {
    expect(() => {
      bookDAO.search("Programação")
    }).toThrow(`Não foi encontrado`)
  })
})

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
  it("Procurando livro já existente", () => {
    expect(() => {
      bookDAO.search("Design UX/UI")
    })
  })
})
