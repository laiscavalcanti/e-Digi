import Book from "../models/Book.js"
import Author from "../models/Author.js"
import Category from "../models/Category.js"
import { isEmpty, maxLength } from "../utils/validate.js"
import ValidateErrors from "../utils/validateErrors.js"

export default class BookDAO {
    constructor(conn) {
        this._conn = conn
    }

    async add(book) {
        if (!(book instanceof Book)) {
            throw new Error(`O Objeto não é do tipo Livro`)
        }
        try {
            const books = await this._conn.query(`SELECT * FROM book`)

            if (books.some(b => b.title === book.title)) {
                throw new Error(`Já existe um cadastro de livro com esse título!`)
            }
            const result = await this._conn.query(`INSERT INTO book (
        author_id, category_id, title, resume, summary, number_of_pages,
        isbn, edition, price) VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [book.author.id, book.category.id, book.title, book.title, book.summary, book.number_of_pages,
                book.isbn, book.edition, book.price
            ])
            console.log(result.insertId);
        } catch (error) {
            throw new Error(error)
        }

    }
    async search(title) {
        const list = []

        if (isEmpty(title)) {
            throw new Error("A busca do livro precisa ter no minimo 2 letras")
        }
        try {
            const result = await this._conn.query(`SELECT title, resume, summary, number_of_pages, isbn, edition, price, c.name as 'name_category', a.name as 'name_author', a.email 
    FROM book as b join category as c join author as a on b.category_id=c.id and b.author_id = a.id 
    WHERE title LIKE "%?%"`, title)

            if (result.filter(e => e.title.includes(title))) {
                throw new Error("Não foi encontrado")
            }

            for (let item in result) {
                const books = new Book(Author(item['name_author'], item['email']),
                    Category(item['name_category']), item['title'], item['resume'], item['summary'], item['number_of_pages'],
                    item['isbn'], item['edition'], item['price'])

                list.push(books)
                console.log(list)
            }
        } catch (err) {
            throw new Error(err)
        }

    }
}