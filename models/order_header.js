module.exports=(sequelize,Sequelize)=>{
    const OrderHeader=sequelize.define('orderheader',{
        order_date:Sequelize.DATE,
        order_status:Sequelize.STRING(10),
        payment_mode:Sequelize.STRING(20),
        order_shipment_date:Sequelize.DATE,

    });

	return OrderHeader
}