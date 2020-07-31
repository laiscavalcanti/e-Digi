import Book from '../models/Book.js';

export default class BookDAO{
    constructor(){
        this._list = [];
    }
      
    add(book){
        if(!(book instanceof Book)){
            throw new Error (`O objeto não é do tipo Livro`);
        }

        if(this._list.some((b) => b.title === book.title)){
            throw new Error(`O livro já existe`);
        }
        this._list.push(book);
        console.log(this._list)
    }


}