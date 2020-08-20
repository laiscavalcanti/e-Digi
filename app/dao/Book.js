import Book from "../models/Book.js";
import {isEmpty, maxLength} from '../validate.js'
import ValidateErrors from "../validateErrors.js";

export default class BookDAO {
  constructor() {
    this._list = [];
  }
  hasTitle(book) {
    return this._list.some((b) => b.title === book.title);
  }
  hasIsbn(book) {
    return this._list.some((b) => b.isbn === book.isbn);
  }

  validationBook(book) {
    const validate = new ValidateErrors();

    if (!(book instanceof Book)) {
      throw new Error(`O Objeto não é do tipo Livro`);
    }
    if (this.hasTitle(book)) {
      validate.addError(
        new Error(`Já existe um cadastro de livro com esse título!`)
      );
    }
    if (this.hasIsbn(book)) {
      validate.addError(
        new Error(`Já existe um livro cadastrado com esse ISBN!`)
      );
    }
    return validate;
  }

  render(title){
    const book = this.hasTitle(title);

    /*if(isEmpty(title) || title < maxLength(2)){
        throw new Error ("A busca do livro precisa ter no minimo 2 letras")
    }*/
    if(!book){
      throw new Error ("Não foi encontrado");
  }
    return book.toView();
}

  add(book) {
    const validatedBook = this.validationBook(book);
    if (validatedBook.hasErrors()) {
      throw validatedBook.errors;
    }

    this._list.push(book);
  }
}
