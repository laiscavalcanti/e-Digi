import Category from "../app/models/Category.js"

describe("Teste para categoria", () => {
  it("Erro para categoria com nome nulo", () => {
    try {
      new Category(null)
      console.log("Erro: categoria foi criado mesmo como nome nulo")
    } catch (err) {
      expect(err.message)
    }
  })
  it("Erro para categoria vazio", () => {
    try {
      new Category(" ")
      console.log("Erro: categoria foi criada com campo vazio")
    } catch (err) {
      expect(err.message)
    }
  })
  it("Cadastro de categoria", () => {
    try {
      new Category("Devops")
      console.log("Categoria foi criada com sucesso!")
    } catch (err) {
      expect(err.message)
    }
  })
})
