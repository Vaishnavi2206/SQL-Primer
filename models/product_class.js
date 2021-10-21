module.exports=(sequelize,Sequelize)=>{
    const ProductClass=sequelize.define('product_class',{
        product_class_code:Sequelize.INTEGER(4),
        product_class_desc:Sequelize.STRING(40)

    });

    

	return ProductClass

}