import Book from "../app/models/Book.js";
import Author from "../app/models/Author.js";
import Category from "../app/models/Category.js";

describe("Teste para Livro", ()=> {
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
          console.log("Livro criado com nome vazio")
        } catch (err) {
          expect(err.message).toMatch("O campo título precisa ser preenchido");
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
          console.log("Livro criado com resumo sem o mínimo de caracteres exigido")
        } catch (err) {
          expect(err.message).toMatch("O resumo precisa ter mais que 500 caracteres");
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
          console.log("Livro criado com sumário vazio")
        } catch (err) {
          expect(err.message).toMatch("O campo sumário não pode ser vazio");
        }
      });
      it("O número de páginas dever ser maior que 0", () => {
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
          console.log("Livro criado com número de páginas menor que 0")
        } catch (err) {
          expect(err.message).toMatch("O campo número de páginas precisa recebr valores maiores que 0");
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
          console.log("Livro criado com ISBN em formato errado")
        } catch (err) {
          expect(err.message).toMatch("O campo isbn precisa ser preenchido com um formato válido");
        }  
      });
    
      it("O autor não pode ser vazio", () => {
        try {
          const author = new Author("", "ana@gmail.com");
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
          console.log("Livro criado com nome de autor vazio")
        } catch (err) {
          expect(err.message).toMatch("O campo nome precisa ser preenchido");
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
          console.log("Livro criado email em formato inválido")
        } catch (err) {
          expect(err.message).toMatch("O campo email precisa ser preenchido com um formato válido");
        }
      });
    
      it("Categoria não pode ser vazia", () => {
        try {
          const author = new Author("Ana", "ana@gmail.com");
          const category = new Category("");
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
          console.log("Livro criado com nome de categoria vazia")
        } catch (err) {
          expect(err.message).toMatch("O campo categoria precisa ser preenchido");
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
          console.log("Livro criado com valor de preço em negativo")
        } catch (err) {
          expect(err.message).toMatch("O campo preço precisa receber valores positivos");
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
          console.log("Livro criado com número da edição sem começar com 1")
        } catch (err) {
          expect(err.message).toMatch("O campo edição precisa começar com o número 1");
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
            28,
            '12'
          );
          console.log("Livro criado com sucesso!")
        } catch (err) {
          expect(err.message).toMatch("O campo edição precisa começar com o número 1");
        }  
      });
})