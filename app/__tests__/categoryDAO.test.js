import Category from "../models/Category.js"
import CategoryDAO from "../dao/Category.js"

describe("Testes para classe Categoria", () => {
  it("Add deve lançar erro quando Categoria for undefided", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = undefined
      categoryDAO.add(category)
    }).toThrow(`O objeto não é do tipo categoria`)
  })

  it("Add deve lançar erro quando Categoria for null", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = null
      categoryDAO.add(category)
    }).toThrow(`O objeto não é do tipo categoria`)
  })
  it("Add deve lançar erro quando campo nome de categoria estiver vazio", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = new Category(" ")
      categoryDAO.add(category)
    }).toThrow(`O campo categoria precisa ser preenchido`)
  })

  it("Add deve lançar erro para quando categorias iguais forem cadastradas", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = new Category("Devops")
      const category2 = new Category("Devops")
      categoryDAO.add(category)
      categoryDAO.add(category2)
    }).toThrow(`A categoria já foi cadastrada`)
  })

  it("Criando uma categoria com sucesso", () => {
    const categoryDAO =  new CategoryDAO()
    const category = new Category("Devops")
    categoryDAO.add(category)
    console.log(`Categoria cadastrada com sucesso. Categoria: ${category.name}`)
    expect(categoryDAO.categories).toContainEqual(category)
  })
})
