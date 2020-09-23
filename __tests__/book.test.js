import Book from "../app/models/Book.js"
import BookDAO from "../app/dao/Book.js"
import Author from "../app/models/Author.js"
import Category from "../app/models/Category.js"

describe("Teste para classe livro", () => {
  it("Livro deve ser da instância Book", () => {
    try {
      const book = undefined
      const bookDAO = new BookDAO()
      bookDAO.add(book)
    } catch (err) {
      expect(err.message).toMatch("O Objeto não é do tipo Livro")
    }
  })
  it("Livro não deve receber valor nulo", () => {
    try {
      const book = null
      const bookDAO = new BookDAO()
      bookDAO.add(book)
    } catch (err) {
      expect(err.message).toMatch("O Objeto não é do tipo Livro")
    }
  })
  it("ISBN e Título de livros não podem ser iguais", () => {
    try {
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
      console.log({
        list: bookDAO._list,
      })
      bookDAO.add(newBook)
      console.log({
        list: bookDAO._list,
      })
    } catch (err) {
      expect(err.message)
    }
  })
  it("O titulo não pode ser vazio", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        " ",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo título precisa ser preenchido")
    }
  })
  it("O resumo precisa ter ao menos 500 caracteres", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O resumo precisa ter mais que 500 caracteres")
    }
  })
  it("O sumário não pode ser vazio ", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        " ",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo sumário não pode ser vazio")
    }
  })
  it("O número de páginas dever ser maior que 0", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        -2,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo número de páginas precisa recebr valores maiores que 0")
    }
  })
  it("O ISBN precisa estar no formato correto", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "9-85-136-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo isbn precisa ser preenchido com um formato válido")
    }
  })

  it("O autor não pode ser vazio", () => {
    try {
      const author = new Author("", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo nome precisa ser preenchido")
    }
  })

  it("O email precisa de um email válido", () => {
    try {
      const author = new Author("Ana", "anagmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo email precisa ser preenchido com um formato válido")
    }
  })

  it("Categoria não pode ser vazia", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo categoria precisa ser preenchido")
    }
  })

  it("O preço não pode ser negativo", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        -2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo preço precisa receber valores positivos")
    }
  })

  it("O número da edição precisa começar com número 1", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        "12"
      )
    } catch (err) {
      expect(err.message).toMatch("O campo edição precisa começar com o número 1")
    }
  })
})
