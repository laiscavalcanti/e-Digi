import BookDAO from '../dao/Book.js';
import { isEmpty, maxLength } from '../validate.js';

export default class BookView {

    constructor(title){
        this.title = title;
    }

     set title(title) {
       const validLength = maxLength(3);

        if(isEmpty(title)) throw new Error("Livro não encontrado");
        if(validLength(title)) throw new Error("É preciso ter mais de 2 caracteres para fazer a busca");

        this._title = title;
    }

    render(){
        const bookDAO = new BookDAO();
        const book = bookDAO.hasTitle(this._title);
        if(!book) throw new Error ("Nenhum livro foi encontrado com esse título.");
        
        return book.toView();
    }

    get title(){
        return this._title; 
    }
}