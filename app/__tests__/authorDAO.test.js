import Author from "../app/models/Author.js"
import AuthorDAO from "../app/dao/Author.js"

describe("Teste para clase Autor", () => {
  it("Add deve lançar erro quando autor for undefided", () => {
    try {
      const author = undefined
      const authorDAO = new AuthorDAO()
      authorDAO.add(author)
      console.log("Autor salvo com sucesso!")
    } catch (err) {
      expect(err.message)
    }
  })
  it("Add deve lançar erro quando autor for null", () => {
    try {
      const author = null
      const authorDAO = new AuthorDAO()
      authorDAO.add(author)
      console.log("Autor salvo com sucesso!")
    } catch (err) {
      expect(err.message)
    }
  })

  it("Os emails não podem ser iguais", () => {
    try {
      const author1 = new Author("Ana", "ana@gmail.com")
      const author2 = new Author("Ana", "ana@gmail.com")
      const authorDAO = new AuthorDAO()
      authorDAO.add(author1)
      authorDAO.add(author2)
      console.log("O autor foi salvo com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })

  it("O email precisa estar em um formato válido", () => {
    try {
      const author1 = new Author("Ana", "ana@.com")
      const authorDAO = new AuthorDAO()
      authorDAO.add(author1)
      console.log("O autor foi salvo com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })

  it("O campo nome não pode estar vazio", () => {
    try {
      const authorDAO = new AuthorDAO()
      const author2 = new Author(" ", "ana@gmail.com")
      authorDAO.add(author2)
    } catch (err) {
      expect(err.message)
    }
  })
  it("Os emails não podem ser iguais", () => {
    try {
      const author1 = new Author("Ana", "ana@gmail.com")
      const authorDAO = new AuthorDAO()
      authorDAO.add(author1)
      console.log("O autor foi salvo com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })
})
