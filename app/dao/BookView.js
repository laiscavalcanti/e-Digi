import BookDAO from './Book.js';
import {isEmpty, maxLength} from '../validate.js'

export default class BookView{
    constructor(bookDAO){
       this._bookDAO = bookDAO ;
    }
    render(title){
        const book = this._bookDAO.hasTitle(title);

        if(!(bookDAO instanceof BookDAO)){
            throw new Error `O objeto nao é do tipo Livro`
        }
        if(isEmpty(title) || title < maxLength(2)){
            throw new Error("A busca do livro precisa ter no minimo 2 letras")
        }

        if(!(book)){
            throw new Error `Não foi encontrado`
        }
        return book.toView();
    }
}