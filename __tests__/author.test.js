import Author from "../app/models/Author.js";
import AuthorDAO from "../app/dao/Author.js";

describe("Teste para clase Autor", () => {
  it("Author não pode receber campo vazio!", () => {
    try {
      new Author(" ");
    } catch (err) {
      expect(err.message).toMatch("O campo Author não pode ser vazio!");
    }
  });

  it("Autor precisa ser da instância autor", () => {
    try {
      const author = undefined;
      const authorDAO = new AuthorDAO();
      authorDAO.add(author);
    } catch (err) {
      expect(err.message).toMatch(
        "Para criação do autor a instância precisa ser do tipo Author"
      );
    }
  });
  it("Autor não pode receber valor nulo", () => {
    try {
      const category = null;
      const categoryDAO = new CategoryDAO();
      categoryDAO.add(category);
    } catch (err) {
      expect(err.message).toMatch(
        "Para criação do autor a instância precisa ser do tipo Author"
      );
    }
  });

  it("Os emails não podem ser iguais", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author1 = new Author("Ana", "ana@gmail.com");
      const author2 = new Author("Ana", "ana@gmail.com");
      authorDAO.add(author1);
      authorDAO.add(author2);
      //console.log(`salvou ${author1.name} ${author1.email}`);
      //console.log(`salvou ${author2.name} ${author2.email}`);
    } catch (err) {
      expect(err.message).toMatch("Um author já foi cadastrado com esse email");
    }
  });
  it("O email precisa estar em um formato válido", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author3 = new Author("Ana", "ana.com");
      authorDAO.add(author3);
      //console.log(`salvou ${author3.name} ${author3.email}`);
    } catch (err) {
      expect(err.message).toMatch("O email não está em um formato válido");
    }
  });

  it("O campo nome não pode estar vazio", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author2 = new Author(" ", "pedro@gmail.com");
      authorDAO.add(author2);
      //console.log(`salvou ${author2.name} ${author2.email}`);
    } catch (err) {
      expect(err.message).toMatch("O campo nome está vazio");
    }
  });
});
