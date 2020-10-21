import Author from "../models/Author.js"

describe("Teste para Author", () => {
  it("É esperado um erro ao criar autor sem nome e email", () => {
    expect(() => {
      new Author(" ")
    }).toThrow("O campo nome precisa ser preenchido")
  })

  it("É esperado um erro ao criar autor email", () => {
    expect(() => {
      new Author("Ana", " ")
    }).toThrow("O campo email precisa ser preenchido com um formato válido")
  })

  it("É esperado um erro ao criar autor com nome e email no formato válido", () => {
    expect(() => {
      new Author("Ana", "ana.com")
    }).toThrow("O campo email precisa ser preenchido com um formato válido")
  })

  it("Criando um autor com sucesso", () => {
    const author = new Author("Ana", "ana@gmail.com")
    console.log("Autor criado com sucesso")
    expect(author.name).toBe("Ana")
    expect(author.email).toBe("ana@gmail.com")
  })
})
