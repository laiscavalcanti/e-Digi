import Book from "./Book.js"

export default class CartItem {
  constructor(book, quantify) {
    this.book = book
    this.quantify = quantify
  }
  set book(book) {
    if (!(book instanceof Book)) {
      throw new Error("O objeto não é do tipo livro")
    }
    this._book = book
  }
  set quantify(quantify) {
    console.log(quantify)
    if (quantify <= 0) {
      throw new Error("A quantidade precisa ser maior que 0")
    }
    this._quantify = quantify
  }
  get total() {
    const valueTotal = this._book.price * this._quantify
    return valueTotal
  }

  toString() {
    console.log(this._book)
    return `[Nome: ${this._book.title}]\n [Quantidade: ${this._quantify}] \n [Total: ${this.total}]\n`
  }
}
