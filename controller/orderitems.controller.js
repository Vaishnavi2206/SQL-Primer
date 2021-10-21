const db = require("../models");
const OrderItems = db.order_items;

//create and save new address
exports.create = (req, res) => {
  const order = {
    product_quantity:3,
    productID:1,
    orderID:1
  };

  //save in the database
  OrderItems.create(order)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
    });
};
