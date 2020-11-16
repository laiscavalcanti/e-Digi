import Author from "../models/Author.js";
import AuthorDAO from "../dao/Author.js";
import Connection from "../config/Connection.js"

const teste = async() =>{
  try {
    const conn = new Connection()
    conn.getConnection()
    const authorDAO = new AuthorDAO();
    const author = new Author("Pedro", "pedro@gmail.com"); 
    await authorDAO.add(author);
    console.log(`salvou ${author.name} ${author.email}`);
   //await conn.close()
  } catch (error) {
    console.error( error);
  }
}

teste()