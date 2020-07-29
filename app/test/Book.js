import Author from "../models/Author.js";
import Category from "../models/Category.js";
import Book from "../models/Book.js";

//title, resume, summary, numberPages, isbn, author, category, price, edition

try {
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
  console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
     ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}, 
     ${newBook.edition}`);
} catch (err) {
  console.log(`${err}`);
}
