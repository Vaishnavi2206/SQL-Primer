const dbConfig=require('../config/db')
const Sequelize=require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize;
db.address=require("./address.js")(sequelize,Sequelize)
db.carton=require("./carton.js")(sequelize,Sequelize)
db.customer = require("./customer.js")(sequelize, Sequelize);
db.shipper=require("./shipper.js")(sequelize, Sequelize)
db.order_header=require("./order_header.js")(sequelize,Sequelize)
db.product_class=require("./product_class.js")(sequelize,Sequelize)
db.product=require("./product.js")(sequelize,Sequelize)
db.order_items=require("./order_items.js")(sequelize,Sequelize)

//CUSTOMER TABLE
db.address.hasMany(db.customer, { as: "customer" });
db.customer.belongsTo(db.address, {
  foreignKey: "addressId",
  as: "address",
});

//FOR ORDER_HEADER
db.customer.hasMany(db.order_header,{foreignKey: "customerId"})
db.order_header.belongsTo(db.customer,{
  foreignKey: "customerId",
  as:"customer"
})

db.shipper.hasMany(db.order_header,{foreignKey: "shipperId"})
db.order_header.belongsTo(db.shipper, {
  foreignKey: "shipperId",
  as: "shipper",
});

// db.order_header.hasMany(db.order_items,{foreignKey:"orderID"})
// db.order_items.belongsTo(db.order_header, { foreignKey: "orderID" });
// db.order_items.hasMany(db.product,{foreignKey:"productID"})
// db.product.belongsTo(db.order_items,{foreignKey:"orderID"})
module.exports =db