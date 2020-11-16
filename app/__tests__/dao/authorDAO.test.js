import Author from "../../models/Author.js"
import AuthorDAO from "../../dao/Author.js"
import Connection from "../../config/Connection.js"

describe("Teste para clase Autor", () => {
  it("Add deve lançar erro quando autor for undefided", async () => {
    const author = undefined
    const conn = new Connection()
    let result = await new AuthorDAO(conn).add(author)

    expect(result).toThrow(new Error(`O objeto não é do tipo autor`))

    conn.close()
  })
  it("Add deve lançar erro quando autor for null", async () => {
    const author = null
    const conn = new Connection()
    let result = await new AuthorDAO(conn).add(author)

    expect(result)

    conn.close()
  })

  it("Add deve lançar erro quando houver outro autor igual já cadastrado", async () => {
    const author = new Author("Ane","ane@gmail.com")
    const conn = new Connection()

    let result = await new AuthorDAO(conn).add(author)

    expect(result)

    conn.close()
    /*expect(() => {
      const author1 = new Author("Ana", "ana@gmail.com")
      const author2 = new Author("Ana", "ana@gmail.com")
      authorDAO.add(author1)
      authorDAO.add(author2)
    }).toThrowError(new Error(`O author já existe`))*/
  })

  /*it("Add deve lançar erro quando campo nome de autor estiver vazio", () => {
    const authorDAO = new AuthorDAO()
    expect(() => {
      const author = new Author(" ", "ana@gmail.com")
      authorDAO.add(author)
    }).toThrowError(new Error(`O campo nome precisa ser preenchido`))
  })

  it("Add deve lançar erro quando campo email de autor estiver vazio", () => {
    const authorDAO = new AuthorDAO()
    expect(() => {
      const author = new Author("Ana", " ")
      authorDAO.add(author)
    }).toThrowError(new Error(`O campo email precisa ser preenchido com um formato válido`))
  })
  it("Adicionando autor com sucesso", () => {
    const authorDAO = new AuthorDAO()
    const author = new Author("Ana", "ana@gmail.com")
    authorDAO.add(author)
    console.log(`Autor cadastrado com sucesso! \nDados do Autor: \nNome: ${author.name}, Email: ${author.email}`)
    expect(authorDAO.authors).toContainEqual(author)
  })*/
})
