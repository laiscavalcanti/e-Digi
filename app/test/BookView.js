import BookView from '../view/BookView.js'
import BookDAO from '../dao/Book.js'
import Book from '../models/Book.js'
import Author from "../models/Author.js";
import Category from "../models/Category.js";

try{
    const bookDAO = new BookDAO();
    const author = new Author("Ana", "ana@gmail.com");
    const category = new Category("Design");
    const book = new Book(
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
      bookDAO.add(book);
      console.log({book});
      new BookView("Design").render();    
} catch(err){
    console.log(err);
}