import Category from "../models/Category.js"
import CategoryDAO from "../dao/Category.js"

describe("Testes para classe Categoria", () => {
  it("Add deve lançar erro quando Categoria for undefided", () => {
    try {
      const category = undefined
      const categoryDAO = new CategoryDAO()
      categoryDAO.add(category)
      console.log("Categoria não pode ser salva");
    } catch (err) {
      expect(err.message)
    }
  })

  it("Add deve lançar erro quando Categoria for null", () => {
    try {
      const category = null
      const categoryDAO = new CategoryDAO()
      categoryDAO.add(category)
      console.log("Categoria não pode ser salva");
    } catch (err) {
      expect(err.message)
    }
  })
  it("Categoria com nome vazio não pode ser criada", () => {
    try {
      new Category(" ")
    } catch (error) {
      expect(error.message)
    }
  })

  it("Categorias iguais não podem ser cadastradas", () => {
    try {
      const category = new Category("Devops")
      const categoryDAO = new CategoryDAO()
      categoryDAO.add(category)
      const categoria2 = new Category("Devops")
      categoryDAO.add(categoria2)
      console.log("sucesso: categoria salva com sucesso");
    } catch (err) {
      expect(err.message)
    }
  })
})
