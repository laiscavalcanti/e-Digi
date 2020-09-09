import Category from "../models/Category.js";
import CategoryDAO from "../dao/Category.js";


try {
  const category = undefined;
  const book = new CategoryDAO();
  book.add(category);
} catch (err) {
  console.log(err);
}

try {
  const category = null;
  const book= new CategoryDAO();
  book.add(category);
} catch (err) {
  console.log(err);
}

//teste para categoria repetida
try {
  const categoryDAO = new CategoryDAO();
  const category1 = new Category("Devops");
  const category2 = new Category("Devops");
  categoryDAO.add(category1);
  categoryDAO.add(category2);
  console.log(`saved ${category1.name}`);
  console.log(`saved ${category2.name}`);
} catch (err) {
  console.log(`${err}`);
}

// teste para campo vazio

try {
  const categoryDAO = new CategoryDAO();
  const category1 = new Category("Devops");
  categoryDAO.add(category1);
  console.log(`saved ${(category1.name = " ")}`);
} catch (err) {
  console.log(`${err}`);
}
