import Author from "../models/Author.js";
import AuthorDAO from "../dao/Author.js";

try {
  const author = undefined;
  const authorDAO = new AuthorDAO();
  authorDAO.add(author);
} catch (err) {
  console.log(err);
}

try {
  const author = null;
  const authorDAO = new AuthorDAO();
  authorDAO.add(author);
} catch (err) {
  console.log(err);
}

//teste para email igual
try {
  const authorDAO = new AuthorDAO();
  const author1 = new Author("Ana", "ana@gmail.com");
  const author2 = new Author("Ana", "ana@gmail.com");
  authorDAO.add(author1);
  authorDAO.add(author2);
  console.log(`salvou ${author1.name} ${author1.email}`);
  console.log(`salvou ${author2.name} ${author2.email}`);
} catch (error) {
  console.log("WRG " + error);
}

//validação de formato de email
try {
  const authorDAO = new AuthorDAO();
  const author3 = new Author("Ana", "ana.com");
  authorDAO.add(author3);
  console.log(`salvou ${author3.name} ${author3.email}`);
} catch (error) {
  console.log("WRG " + error);
}

//validação de campo vazio para nome
try {
  const authorDAO = new AuthorDAO();
  const author2 = new Author(" ", "pedro@gmail.com");
  authorDAO.add(author2);
  console.log(`salvou ${author2.name} ${author2.email}`);
} catch (error) {
  console.log("WRG: " + error);
}
