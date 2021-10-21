module.exports=(sequelize,Sequelize)=>{
    const Orderitems=sequelize.define('order_item',{
        product_quantity:Sequelize.INTEGER(3),
        productID:Sequelize.INTEGER(6),
        orderID:Sequelize.INTEGER(6)
    });

	return Orderitems;
}