import Author from "../models/Author.js"

describe("Teste para Author", () => {
  it("É esperado um erro ao criar autor sem nome e email", () => {
    expect(() => {
      new Author(" ")
    }).toThrowError(new Error("O campo nome precisa ser preenchido"))
  })

  it("É esperado um erro ao criar autor email", () => {
    expect(() => {
      new Author("Ana", " ")
    }).toThrowError(new Error("O campo email precisa ser preenchido com um formato válido"))
  })

  it("É esperado um erro ao criar autor sem nome e email no formato válido", () => {
    expect(() => {
      new Author("Ana", "ana.com")
    }).toThrowError(new Error("O campo email precisa ser preenchido com um formato válido"))
  })

  it("Adicionando autor com sucesso", () => {
    const author = new Author("Ana", "ana@gmail.com")
    console.log("Autor criado com sucesso")
    expect(author._name).toBe("Ana")
    expect(author._email).toBe("ana@gmail.com")

    /*expect().toBeCalledWith(
        expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
      );*/
  })
})
