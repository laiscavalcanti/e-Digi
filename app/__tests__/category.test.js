import Category from "../models/Category.js"

describe("Teste para categoria", () => {
  it("É esperado um erro ao criar categoria sem nome", () => {
    expect(() => {
      new Category(" ")
    }).toThrowError(new Error(`O campo categoria precisa ser preenchido`))
  })
  it("Adicionando categoria com sucesso", () => {
    const category = new Category("Devops")
    expect(category._name).toBe("Devops")
  })
})
