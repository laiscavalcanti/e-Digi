import Author from './Author.js';
import Category from './Category.js';
import { isEmpty, isNull, maxLength, isbnFormat, editionFormat } from "../validate.js";

export default class Book{
    constructor(title, resume, summary, numberPages, isbn, author, category, price, edition){
        this.title = title;
        this.resume = resume;
        this.summary = summary;
        this.numberPages = numberPages;
        this.isbn = isbn;
        this.author = author;
        this.category = category;
        this.price = price;
        this.edition = edition;
    }

    set title(title){
        if (isEmpty(title) || isNull(title))
        throw new Error(`O campo título precisa ser preenchido`);
      this._title = title;
    }
    set resume(resume){
        const validLength = maxLength(40)
        if(!validLength(resume))
            throw new Error(`O resumo precisa ter mais que 500 caracteres`);
        if(isNull(resume) || isEmpty(resume)) 
            throw new Error(`O campo resumo não pode ser vazio`);
        this._resume = resume;
    }
    set summary(summary){
        if(isEmpty(summary) || isNull(summary))
            throw new Error(`O campo sumário não pode ser vazio`);
        this._summary = summary;
    }
    set numberPages(numberPages){
        if(numberPages < 0)
            throw new Error(`O campo número de páginas precisa recebr valores maiores que 0`);
        this._numberPages = numberPages;
    }
    set isbn(isbn){
        if (isEmpty(isbn) || !isbn.match(isbnFormat))
        throw new Error(
          `O campo isbn precisa ser preenchido com um formato válido`
        );
      this._isbn = isbn;
    }
    set author(author){
        if(author instanceof Author);
        this._author = author;
    }
    set category(category){
        if(category instanceof Category);
        this._category = category;
    }
    set price(price){
        if(price <= 0)
            throw new Error(`O campo preço precisa receber valores positivos`)
        this._price = price;
    }

    set edition(edition){
        if( isNull(edition) || !edition.match(editionFormat))
            throw new Error(`O campo edição precisa começar com o número 1`);
        this._edition = edition;
    }
    get edition(){
        return this._edition;
    }
    get price(){
        return this._price;
    }
    get author(){
        return this._author;
    }
    get category(){
        return this._category;
    }
    get isbn(){
        return this._isbn; 
    }
    get numberPages(){
        return this._numberPages;
    }
    get summary(){
        return this._summary;
    }
    get resume(){
        return this._resume;
    }
    get title(){
        return this._title;
    }
}