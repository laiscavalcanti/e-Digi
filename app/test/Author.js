import Author from "../models/Author.js";
import AuthorDAO from "../dao/Author.js";

try {
  const authorDAO = new AuthorDAO();
  const author1 = new Author("Ana", "ana@gmail.com");
  authorDAO.save(author1);

  const author2 = new Author("Lais", " ");
  authorDAO.save(author2);
  console.log(`salvou ${author1.name} ${author1.email}`);
} catch (error) {
  console.log("WRG: " + error);
}
