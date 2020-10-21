import Book from "../models/Book.js"
import Author from "../models/Author.js"
import Category from "../models/Category.js"

describe("Teste para Livro", () => {
  it(`É esperado um erro ao criar Livro sem título`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        " ",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com nome vazio")
    }).toThrow(`O campo título precisa ser preenchido`)
  })
  it(`É esperado um erro ao criar livro com campo resumo com menos de 500 caracteres`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log(`Livro criado com resumo sem o mínimo de caracteres exigido`)
    }).toThrow(`O resumo precisa ter mais que 500 caracteres`)
  })
  it(`É esperado um erro ao criar livro com campo sumário vazio`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        " ",
        40,
        "978-85-13196-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com sumário vazio")
    }).toThrow(`O campo sumário não pode ser vazio`)
  })
  it(`É esperado um erro ao criar livro com número de páginas menor que 0`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        -2,
        "978-85-13196-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com número de páginas menor que 0")
    }).toThrowError(`O campo número de páginas precisa recebr valores maiores que 0`)
  })
  it(`É esperado um erro ao criar livro com ISBN em formato inválido`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "9-85-136-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com ISBN em formato errado")
    }).toThrow(`O campo isbn precisa ser preenchido com um formato válido`)
  })

  it(`É esperado um erro ao criar livro com nome de autor vazio`, () => {
    expect(() => {
      const author = new Author(" ", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com nome de autor vazio")
    }).toThrow(`O campo nome precisa ser preenchido`)
  })

  it("É esperado um erro ao criar livro com email de autor em formato inválido", () => {
    expect(() => {
      const author = new Author("Ana", "anagmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro foi criado email em formato inválido")
    }).toThrow(`O campo email precisa ser preenchido com um formato válido`)
  })

  it(`É esperado um erro ao criar livro com nome de categoria vazio`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category(" ")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        20,
        "12"
      )
      console.log("Livro criado com nome de categoria vazia")
    }).toThrow(`O campo categoria precisa ser preenchido`)
  })

  it(`É esperado um erro ao criar livro preço com valores negativos`, () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        -20,
        "12"
      )
      console.log("Livro criado com valor de preço em negativo")
    }).toThrow(`O campo preço precisa receber valores positivos`)
  })

  it("É esperado um erro ao criar livro com o primeiro número do campo edição diferente de 1", () => {
    expect(() => {
      const author = new Author("Ana", "ana@gmail.com")
      const category = new Category("Design")
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        "21"
      )
      console.log(`Livro criado com número da edição sem começar com 1`)
    }).toThrow(`O campo edição precisa começar com o número 1`)
  })
  
})
