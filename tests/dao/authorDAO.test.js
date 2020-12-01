import Author from "../../src/models/Author.js"
import AuthorDAO from "../../src/dao/Author.js"
import Connection from "../../src/config/Connection.js"

describe("Teste para clase Autor", () => {
  let conn = new Connection()
  
  beforeAll(async () => {
    await conn.conect()
});

afterAll( async () => {
    await conn.close();
})
    it("Criando autor com sucesso", async () => {
      const authorDAO = new AuthorDAO(conn)
      const author = new Author("Joao", "joao@gmail.com")
      await authorDAO.add(author)
      expect(author.email).toBeDefined()
    })
  
    it("Add deve lançar erro quando houver outro autor igual já cadastrado", async () => {
      const authorDAO = new AuthorDAO(conn)
      const author = new Author("Ana", "ana@gmail.com")
      await authorDAO.add(author)
      expect(author).toThrow()
    })

    it("Add deve lançar erro quando campo nome de autor estiver vazio", async () => {
      const authorDAO = new AuthorDAO(conn)
      const author = new Author(" ", "ana@gmail.com")
      await authorDAO.add(author)
      expect(author).toThrow()
    })
  
    it("Add deve lançar erro quando campo email de autor estiver vazio", async () => {
      const authorDAO = new AuthorDAO(conn)
      const author = new Author("Ana", " ")
      await authorDAO.add(author)
      expect(author).toThrow()
    })
})