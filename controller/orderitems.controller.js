const db = require("../models");
const OrderItems = db.order_items;

//create and save new address
exports.create = (req, res) => {
  const order = {
    product_quantity:req.body.product_quantity,
    productID:req.body.productID,
    orderID:req.body.orderID
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
