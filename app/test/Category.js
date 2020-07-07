import Category from "../models/Category.js";
import CategoryDAO from "../dao/Category.js";

//teste para categoria repetida
try {
  const categoryDAO = new CategoryDAO();
  const category1 = new Category("Infra");
  const category2 = new Category("Infra");
  categoryDAO.add(category1);
  categoryDAO.add(category2);
  console.log(`salvou ${category1.name}`);
  console.log(`salvou ${category2.name}`);
} catch (err) {
  console.log(`WRG ${err}`);
}
