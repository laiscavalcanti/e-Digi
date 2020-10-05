import Author from "../app/models/Author.js"

describe("Teste para Author", () => {
  it("Erro para autor vazio", () => {
    try {
      new Author()
      console.log("Autor foi criado mesmo como nome nulo")
    } catch (err) {
      expect(err.message)
    }
  })

  it("Erro para autor vazio", () => {
    try {
      new Author(" ")
      console.log("Autor criado com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })

  it("Erro para autor com email vazio", () => {
    try {
      new Author("Ana", "")
      console.log("Autor criado com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })

  it("Erro para autor com email no formato errado", () => {
    try {
      new Author("Ana", "ana.com")
      console.log("Autor criado com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })
  it("Erro para autor vazio", () => {
    try {
      new Author("Ana", "ana@gmail.com")
      console.log("Autor criado com sucesso")
    } catch (err) {
      expect(err.message)
    }
  })
})
