import Category from "../models/Category.js"

export default class CategoryDAO {
    constructor(conn) {
        this._conn = conn
    }
    async add(category) {
        if (!(category instanceof Category)) {
            throw new Error("O objeto não é do tipo categoria")
        }
        try {
            const categories = await this._conn.query(`SELECT * FROM category`)

            if (categories.some(c => c.name === category.name)) {
                throw new Error("A categoria já foi cadastrada")
            }
            const result = await this._conn.query(`INSERT INTO category (name) VALUES (?)`, [category.name])
            category.id = result.insertId
            console.log(result.insertId)
        } catch (error) {
            throw new Error(error)
        }
    }
}