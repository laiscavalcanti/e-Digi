import Category from "../app/models/Category.js";
import CategoryDAO from "../app/dao/Category.js";

describe("Testes para classe Categoria", () => {
  it("Categoria precisa ser da instância Category", () => {
    try {
      const category = undefined;
      const categoryDAO = new CategoryDAO();
      categoryDAO.add(category);
    } catch (err) {
      expect(err.message).toMatch(
        "Para criação da categoria precisa ser do tipo Category"
      );
    }
  });

  it("Categoria não pode ser nula", () => {
    try {
        const category = null;
        const categoryDAO = new CategoryDAO();
        categoryDAO.add(category);
      } catch (err) {
        expect(err.message).toMatch("Para criação da categoria o valor não pode ser");
      }
  })
  it("Categoria com nome vazio não pode ser criado", () => {
    try {
      new Category(" ");
    } catch (error) {
      expect(error.message).toMatch("O campo Categoria deve ser preenchido!");
    }
  });

  it("Categorias iguais não podem ser criadas", () => {
    try {
      const categoria = new Category("Devops");
      const categoryDAO = new CategoryDAO();
      categoryDAO.add(categoria);
      const categoriaRepetida = new Category("Devops");
      categoryDAO.add(categoriaRepetida);
    } catch (error) {
      expect(error.message).toMatch(
        "Uma categoria com esse nome já foi cadastrada!!"
      );
    }
  });
});
