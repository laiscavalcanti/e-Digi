import Author from "../models/Author.js"
import Category from "../models/Category.js"
import Book from "../models/Book.js"
import Cart from "../models/Cart.js"
import CartItem from "../models/CartItem.js"

describe("Teste para Carrinho de Compras", () => {
  it("É esperado um erro ao adicionar quantidade de livros menor que 0 no carrinhos de compras", () => {
    expect(() => {
    const author = new Author("Ana", "ana@gmail.com")
    const category = new Category("Design")
    const book = new Book(
      "Design UX/UI",
      "Esse livro é sobre Design UX/UI",
      "Sumário",
      150,
      "978-85-13176-08-9",
      author,
      category,
      40,
      "12"
    )

    const cartItem = new CartItem(book, -1)
    const cart = new Cart(cartItem)

    console.log(cart)
  }).toThrow(`A quantidade precisa ser maior que 0`);
  })
})
