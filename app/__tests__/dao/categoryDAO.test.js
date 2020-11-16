import Category from "../../models/Category.js"
import CategoryDAO from "../../dao/Category.js"

describe("Testes para classe Categoria", () => {
  it("Add deve lançar erro quando Categoria for undefided", () => {
    const categoryDAO = new CategoryDAO()  
      expect(() => {
        const category = undefined
        categoryDAO.add(category)
      }).toThrowError(new Error(`O objeto não é do tipo categoria`))
  })

  it("Add deve lançar erro quando categoria for null", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = null
      categoryDAO.add(category)
    }).toThrowError(new Error(`O objeto não é do tipo categoria`))
  })
  it("Add deve lançar erro quando campo categoria de categoria estiver vazio", () => {
    const categoryDAO = new CategoryDAO()
    expect(() => {
      const category = new Category(" ")
      categoryDAO.add(category)
    }).toThrowError(new Error(`O campo categoria precisa ser preenchido`))
  })

  it("Categorias iguais não podem ser cadastradas", () => {
      const categoryDAO = new CategoryDAO()
      expect(() => {
        const category = new Category("Devops")
        const category2 = new Category("Devops")
        categoryDAO.add(category)
        categoryDAO.add(category2)
      }).toThrowError(new Error(`A categoria já foi cadastrada`))
  })
})
