import Author from "./Author.js"
import Category from "./Category.js"
import { isEmpty, isNull, maxLength, isbnFormat, editionFormat } from "../utils/validate.js"

export default class Book {
  constructor(author, category, title, resume, summary, number_of_pages, isbn, price, edition) {
    this.author = author
    this.category = category
    this.title = title
    this.resume = resume
    this.summary = summary
    this.number_of_pages = number_of_pages
    this.isbn = isbn
    this.price = price
    this.edition = edition
    this.date = new Date()
  }

  set author(author) {
    if (!(author instanceof Author)) {
      throw new Error(`O objeto não é do tipo autor`)
    }
    this._author = author
  }
  set category(category) {
    if (!(category instanceof Category)) {
      throw new Error(`O objeto não é do tipo categoria`)
    }
    this._category = category
  }
  set title(title) {
    if (isEmpty(title) || isNull(title)) throw new Error(`O campo título precisa ser preenchido`)
    this._title = title
  }
  set resume(resume) {
    const validLength = maxLength(50)
    if (isNull(resume) || isEmpty(resume)) throw new Error(`O campo resumo não pode ser vazio`)
    if (!validLength(resume)) throw new Error(`O resumo precisa ter mais que 500 caracteres`)
    this._resume = resume
  }
  set summary(summary) {
    if (isEmpty(summary) || isNull(summary)) throw new Error(`O campo sumário não pode ser vazio`)
    this._summary = summary
  }
  set number_of_pages(number_of_pages) {
    if (number_of_pages < 0) throw new Error(`O campo número de páginas precisa recebr valores maiores que 0`)
    this._number_of_pages = number_of_pages
  }
  set isbn(isbn) {
    if (isEmpty(isbn) || !isbn.match(isbnFormat))
      throw new Error(`O campo isbn precisa ser preenchido com um formato válido`)
    this._isbn = isbn
  }

  set price(price) {
    if (price <= 0) throw new Error(`O campo preço precisa receber valores positivos`)
    this._price = price
  }

  set edition(edition) {
    if (isNull(edition) || !edition.match(editionFormat))
      throw new Error(`O campo edição precisa começar com o número 1`)
    this._edition = edition
  }

  get edition() {
    return this._edition
  }
  get price() {
    return this._price
  }
  get author() {
    return this._author
  }
  get category() {
    return this._category
  }
  get isbn() {
    return this._isbn
  }
  get number_of_pages() {
    return this._number_of_pages
  }
  get summary() {
    return this._summary
  }
  get resume() {
    return this._resume
  }
  get title() {
    return this._title
  }

  toString() {
    return `
            Título: ${this._title}\n
            Resumo: ${this._resume}\n
            Sumário: ${this._summary}\n
            Número de Páginas: ${this._number_of_pages}\n
            ISBN: ${this._isbn}
            Autor: ${this._author.name}\n
            Categoria: ${this._category.name}\n
            Preço: ${this._price}\n
            Edição: ${this._edition}\n
        `
  }
}
