import BookDAO from './BookDao.js';
import {isEmpty, maxLength} from '../validate.js'

export default class BookView{
    constructor(){
        this._BookDAO = BookDAO;
    }
    render(title){
        const book = this._BookDAO.hasTitle(title);

        if(isEmpty(title) || title < maxLength(2)){
            
        }

        if(!book){
            return `Não foi encontrado`
        }
        return book.toView();
    }
}