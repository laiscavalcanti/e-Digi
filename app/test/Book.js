import Author from "../models/Author.js";
import Category from "../models/Category.js";
import Book from "../models/Book.js";
import BookDAO from "../dao/Book.js"

//title, resume, summary, numberPages, isbn, author, category, price, edition

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
    '12'
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
    '12'
  );
  bookDAO.add(newBook2)
  console.log(`saved ${newBook2.title}, ${newBook2.resume}, ${newBook2.summary}, ${newBook2.numberPages}, ${newBook2.isbn}, 
     ${newBook2.author.name}, ${newBook2.author.email}, ${newBook2.category.name}, ${newBook2.price}, 
     ${newBook2.edition}`);
    bookDAO.add(newBook);
  console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
     ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
     ${newBook.edition}`);
} catch (err) {
  console.log(`${err}`);
}

/*try {
  const author2 = new Author("Ana", "ana@gmail.com");
  const category2 = new Category("Design");
  const newBook2 = new Book(
    "Design UX/UI",
    "Esse livro é sobre Design UX/UI",
    "Sumário",
    40,
    "978-85-13196-08-9",
    author,
    category,
    2,
    '12'
  );

  console.log(`saved ${newBook2.title}, ${newBook2.resume}, ${newBook2.summary}, ${newBook2.numberPages}, ${newBook2.isbn}, 
     ${newBook2.author.name}, ${newBook2.author.email}, ${newBook2.category.name}, ${newBook2.price}, 
     ${newBook2.edition}`);
} catch (err) {
  console.log(`${err}`);
}*/