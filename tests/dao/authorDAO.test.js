import Author from "../../src/models/Author.js"
import AuthorDAO from "../../src/dao/Author.js"
import Connection from "../../src/config/Connection.js"

describe("Teste para tabela Autor", () => {
  let conn = new Connection()

  beforeAll(async () => {
    await conn.conect()
  });

  afterAll(async () => {
    await conn.close();
  })

  it("Add deve lançar erro quando autor for undefined", async () => {
    const authorDAO = new AuthorDAO(conn)
    const author = undefined
    await expect(authorDAO.add(author)).rejects.toThrow(`O objeto não é do tipo autor`)
  })

  it("Add deve lançar erro quando autor for null", async () => {
    const authorDAO = new AuthorDAO(conn)
    const author = null
    await expect(authorDAO.add(author)).rejects.toThrow(`O objeto não é do tipo autor`)
  })

  it("Criando autor com sucesso", async () => {
    const authorDAO = new AuthorDAO(conn)
    const author = new Author("Ana", "ana@gmail.com")
    await authorDAO.add(author)
    expect(author.email).toBeDefined()
  })

  it("Add deve lançar erro quando houver outro autor igual já cadastrado", async () => {
    const authorDAO = new AuthorDAO(conn)
    const author = new Author("Ana", "ana@gmail.com")
    await expect(authorDAO.add(author)).rejects.toThrow(`O author já existe`)
  })

})