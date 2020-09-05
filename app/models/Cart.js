import CartItem from "./CartItem.js"

export default class Cart{
    constructor(item){
        this._list = [];
        this.addItem(item);
    }
    addItem(item){
        if(!(item instanceof CartItem)){
            throw new Error('O item não é do tipo CartItem');
        }
        if(item == null){
            throw new Error("O item não pode ser nulo");
        }
       this._list.push(item);
    }
    total(){
        return this._list.reduce((previous, current) => previous + current.total, 0);           
     }
    toString(){
         return `Venda[ items: \n ${this._list} \n Valor Total: ${this.total()}]`;
     }
}