import Category from "../models/Category.js"

describe("Teste para categoria", () => {
  it("É esperado um erro ao criar categoria sem nome", () => {
    expect(() => {
      new Category(" ")
    }).toThrow(`O campo categoria precisa ser preenchido`)
  })
  it("Crindo categoria com sucesso", () => {
    const category = new Category("Devops")
    expect(category.name).toBe("Devops")
  })
})
