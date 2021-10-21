module.exports = (sequelize, Sequelize) => {
 const Product = sequelize.define("product", {
   product_desc: Sequelize.STRING(10),
   product_price: Sequelize.DECIMAL(12, 2),
   product_quantity_avail: Sequelize.INTEGER(4),
   length: Sequelize.INTEGER(5),
   width: Sequelize.INTEGER(5),
   height: Sequelize.INTEGER(5),
   weight: Sequelize.DECIMAL(10),
   product_class_code: Sequelize.INTEGER(4),
 });

  return Product;
};
