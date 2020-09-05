import Cart from "../models/Cart.js";

export default class CartDAO{
    constructor(){
        this._cart = [];
    }
    add(cart){

        if(!(cart instanceof Cart)){
            throw new Error ("O objeto não é do tipo Carrinho de Compras");
        }
        this._cart.push(cart);
        console.log("Compra de livros realizada com suceso!!");
        console.log(cart.toString());
    }
}