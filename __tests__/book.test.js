import Book from "../app/models/Book.js";
import BookDAO from "../app/dao/Book.js";
import Author from "../app/models/Author.js";
import Category from "../app/models/Category.js";

describe("Teste para classe livro", () => {
  it("Livro deve ser da instância Book", () => {
    try {
      const book = undefined;
      const bookDAO = new BookDAO();
      bookDAO.add(book);
    } catch (err) {
      expect(err.message).toMatch("O livro não é do tipo Book");
    }
  });
  it("Livro não deve receber valor nulo", () => {
    try {
      const book = null;
      const bookDAO = new BookDAO();
      bookDAO.add(book);
    } catch (err) {
      expect(err).toMatch("Livro não pode receber um valor nulo");
    }
  });
  it("ISBN e Título de livros não podem ser iguais", () => {
    try {
      const bookDAO = new BookDAO();
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        "12"
      );
      const author2 = new Author("Ana", "ana@gmail.com");
      const category2 = new Category("Design");
      const newBook2 = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author2,
        category2,
        2,
        "12"
      );
      bookDAO.add(newBook2);
      console.log({
        list: bookDAO._list,
      });
      console.log(`saved ${newBook2.title}, ${newBook2.resume}, ${newBook2.summary}, ${newBook2.numberPages}, ${newBook2.isbn}, 
           ${newBook2.author.name}, ${newBook2.author.email}, ${newBook2.category.name}, ${newBook2.price}, 
           ${newBook2.edition}`);
      bookDAO.add(newBook);
      console.log({
        list: bookDAO._list,
      });
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
           ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
           ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O ISBN e o Título já foram cadastrados!");
    }
  });
  it("O titulo não pode ser vazio", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        " ",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O campo do titulo está vazio");
    }
  });
  it("O resumo precisa ter ao menos 500 caracteres", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        '12'
      );
    
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O sumário não tem a quantidade de caracteres exigido");
    }
  });
  it("O sumário não pode ser vazio ", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        " ",
        40,
        "978-85-13196-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("");
    }
  });
  it("O número de páginas dever ser maior que 1", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        -2,
        "978-85-13196-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O número de páginas é menor que 1");
    }
  });
  it("O ISBN precisa estar no formato correto", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "9-85-136-08-9",
        author,
        category,
        2,
        '12'
      );
    
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O ISBN não está no formato correto");
    }
    
  });

  it("O autor não pode ser vazio", () => {
    try {
      const author = new Author(" ", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O campo autor está vazio");
    }
  });

  it("O email precisa de um email válido", () => {
    try {
      const author = new Author("Ana", "anagmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O email do autor está incorreto");
    }
  });

  it("Categoria não pode ser vazia", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category(" ");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("A categoria está com campo vazio");
    }
  });

  it("O preço não pode ser negativo", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        -2,
        '12'
      );
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O preço está com valor negativo");
    }
  });

  it("O número da edição precisa começar com número 1", () => {
    try {
      const author = new Author("Ana", "ana@gmail.com");
      const category = new Category("Design");
      const newBook = new Book(
        "Design UX/UI",
        "Esse livro é sobre Design UX/UI",
        "Sumário",
        40,
        "978-85-18236-08-9",
        author,
        category,
        2,
        '21'
      );
    
      console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
         ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
         ${newBook.edition}`);
    } catch (err) {
      expect(err.message).toMatch("O número da edição não começa com o número 1");
    }  
  });
});
