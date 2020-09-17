import Book from "./Book.js";

export default class BookItem{
    _book;
    _quantity = 1;

    constructor(book){
        this._book = book;
    }

   get total(){
        return this._book.price() * this._quantity;
    }

    get name(){
        return this._book.title();
    }

    quantity(){
        this._quantity++;
    }

    toString(){
        return `Livro: ${this._book.title()}
                Preço: ${this._book.price()}
                Quantidade: ${this._quantity}
                Total: ${this.total}
        `
    }
}