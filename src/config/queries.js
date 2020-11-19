import Connection from "./Connection.js"

export const database_edigi = `CREATE DATABASE IF NOT EXISTS edigi`

export const table_author = `CREATE TABLE IF NOT EXISTS author(
                id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL,
                date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY (NAME)
              )`

export const table_category = `CREATE TABLE IF NOT EXISTS category(
                id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY (NAME)
              )`

export const table_book = `CREATE TABLE IF NOT EXISTS book(
                id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                category_id INTEGER NOT NULL,
                author_id INTEGER NOT NULL,
                title VARCHAR(50) NOT NULL UNIQUE KEY,
                resume VARCHAR(500) NOT NULL,
                summary VARCHAR(500) NOT NULL,
                number_of_pages INTEGER UNSIGNED NOT NULL,
                isbn VARCHAR(17) NOT NULL UNIQUE KEY,
                edition INTEGER UNSIGNED NOT NULL,
                price FLOAT UNSIGNED NOT NULL,
                FOREIGN KEY (category_id) REFERENCES category(id),
                FOREIGN KEY (author_id) REFERENCES author(id)
              )`
export const table_cart = `CREATE TABLE IF NOT EXISTS cart(
                  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  book_id INTEGER NOT NULL,
                  quantity INTEGER UNSIGNED NOT NULL,
                  total FLOAT UNSIGNED NOT NULL,
                  FOREIGN KEY (book_id) REFERENCES book(id)
              )`

async function createQueries() {
  const conn = new Connection()
  
  try {
    await conn.query(database_edigi)
    await conn.query(table_author)
    await conn.query(table_category)
    await conn.query(table_book)
    await conn.query(table_cart)
    console.log("Tabelas criadas com sucesso!")
    conn.query("SHOW TABLES ", (err, table) => {
      console.log(table)
    })
  } catch (err) {
    console.error(err)
  }
  await conn.close()
}

createQueries()
