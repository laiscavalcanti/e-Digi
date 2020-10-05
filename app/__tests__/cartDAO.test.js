import Author from "../app/models/Author.js"
import Category from "../app/models/Category.js"
import Book from "../app/models/Book.js"
import Cart from "../app/models/Cart.js"
import CartItem from "../app/models/CartItem.js"
import CartDAO from "../app/dao/Cart.js"

describe("Teste para Carrinho de Compras", () => {
  it("Add deve lançar erro quando Carro for undefided", () => {
    try {
      const cart = undefined
      const cartDAO = new CartDAO()
      cartDAO.add(cart)
    } catch (err) {
      expect(err.message).toMatch("O objeto não é do tipo Carrinho de Compras")
    }
  })

  it("Add deve lançar erro quando Carro for null", () => {
    try {
      const cart = null
      const cartDAO = new CartDAO()
      cartDAO.add(cart)
    } catch (err) {
      expect(err.message).toMatch("O objeto não é do tipo Carrinho de Compras")
    }
  })

  it("Itens adicionados no carrinho com sucesso", () => {
    const cartDAO = new CartDAO()
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

    //------------------------------------------//

    const book2 = new Book(
      "Design Patterns",
      "Um livro sobre padrões de código",
      "Sumário",
      40,
      "978-85-13276-08-9",
      author,
      category,
      45,
      "12"
    )

    //------------------------------------------//

    const book3 = new Book(
      "Design Patterns em PHP",
      "Um livro sobre padrões de código com PHP",
      "Sumário",
      400,
      "978-85-13276-18-9",
      author,
      category,
      70,
      "12"
    )

    const cartItem = new CartItem(book, 2)
    const cartItem2 = new CartItem(book2, 4)
    const cartItem3 = new CartItem(book3, 5)

    const cart = new Cart(cartItem)
    cart.addItem(cartItem2)
    cart.addItem(cartItem3)

    cartDAO.add(cart)
    console.log(cart)
  })
})
