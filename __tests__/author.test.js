import Author from "../app/models/Author.js";
import AuthorDAO from "../app/dao/Author.js";

describe("Teste para clase Autor", () => {

  it("Autor precisa ser da instância autor", () => {
    try {
      const author = undefined;
      const authorDAO = new AuthorDAO();
      authorDAO.add(author);
    } catch (err) {
      expect(err.message).toMatch(
        "O objeto não é do tipo autor"
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
        "O objeto não é do tipo autor"
      );
    }
  });

  it("Os emails não podem ser iguais", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author1 = new Author("", "ana@gmail.com");
      const author2 = new Author("", "anas@gmail.com");
      authorDAO.add(author1);
      authorDAO.add(author2);
    } catch (err) {
      expect(err.message).toMatch("O author já existe");
    }
  });
  it("O email precisa estar em um formato válido", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author3 = new Author("Ana", "ana.com");
      authorDAO.add(author3);
    } catch (err) {
      expect(err.message).toMatch("O campo email precisa ser preenchido com um formato válido");
    }
  });

  it("O campo nome não pode estar vazio", () => {
    try {
      const authorDAO = new AuthorDAO();
      const author2 = new Author("", "pedro@gmail.com");
      authorDAO.add(author2);
    } catch (err) {
      expect(err.message).toMatch("O campo nome precisa ser preenchido");
    }
  });
});
