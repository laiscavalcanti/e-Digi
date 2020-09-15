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
  it("Categoria com nome vazio não pode ser criada", () => {
    try {
      new Category(" ");
    } catch (error) {
      expect(error.message).toMatch("O campo Categoria deve ser preenchido!");
    }
  });

  it("Categorias iguais não podem ser cadastradas", () => {
    try {
      const category = new Category("Devops");
      const categoryDAO = new CategoryDAO();
      categoryDAO.add(category);
      const categoria2 = new Category("Devops");
      categoryDAO.add(categoria2);
    } catch (err) {
      expect(err.message).toMatch(
        "Uma categoria com esse nome já foi cadastrada!"
      );
    }
  });
});
