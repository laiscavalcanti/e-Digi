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
        150,
        "978-85-13176-08-9",
        author,
        category,
        40,
        '12'
      );

      ////////////////////////////////////////

      const book2 = new Book(
        "Design Patterns",
        "Um livro sobre padrões de código",
        "Sumário",
        40,
        "978-85-13276-08-9",
        author,
        category,
        45,
        '12'
      );
 
      bookDAO.add(book);
      bookDAO.add(book2);
      console.log({book});
      console.log("Resultado da busca");
      const result = bookDAO.search("Design");
      result.forEach(book => {
          console.log(book.toString())
      });
        
} catch(err){
    console.log(err);
}