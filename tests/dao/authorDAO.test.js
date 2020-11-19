import Author from "../../models/Author.js"
import AuthorDAO from "../../dao/Author.js"
import Connection from "../../config/Connection.js"

describe("Teste para clase Autor", () => {
  it("Add deve lançar erro quando autor for undefided", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO(conn)
    await expect(async () => {
      const author = undefined
      await authorDAO.add(author)
    }).rejects.toThrowError(`O objeto não é do tipo autor`)
    await conn.close()
  })
  it("Add deve lançar erro quando autor for null", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO(conn)
    await expect(async () => {
      const author = null
      await authorDAO.add(author)
    }).rejects.toThrowError(`O objeto não é do tipo autor`)
    await conn.close()
  })

  it("Add deve lançar erro quando houver outro autor igual já cadastrado", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO(conn)
    await expect(async () => {
      const author = new Author("Ana", "ana@gmail.com")
      const author2 = new Author("Ana", "ana@gmail.com")
      await authorDAO.add(author)
      await authorDAO.add(author2)
    }).rejects.toThrowError(`O author já existe`)
    await conn.close()
  })

  it("Add deve lançar erro quando campo nome de autor estiver vazio", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO()
    await expect(async () => {
      const author = new Author(" ", "ana@gmail.com")
      await authorDAO.add(author)
    }).rejects.toThrowError(`O campo nome precisa ser preenchido`)
    await conn.close()
  })

  it("Add deve lançar erro quando campo email de autor estiver vazio", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO(conn)
    await expect(async () => {
      const author = new Author("Ana", " ")
      await authorDAO.add(author)
    }).rejects.toThrowError(`O campo email precisa ser preenchido`)
    await conn.close()
  })
  it("Criando autor com sucesso", async () => {
    const conn = new Connection()
    const authorDAO = new AuthorDAO(conn)
    const author = new Author("Pedro", "pedro@gmail.com")
    await authorDAO.add(author)
    console.log(`Autor cadastrado com sucesso! Nome: ${author.name}, Email: ${author.email}`)
    expect(author.name).toBeDefined()
    await conn.close()
  })
})
