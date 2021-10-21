const db = require("../models");
const OrderHeader = db.order_header;
const Op = db.Sequelize.Op;

//create and save new address
exports.create = (req, res) => {

  //create order_header row
  const orderheaders = {
    order_date: req.body.order_date,
    order_status: req.body.order_status,
    payment_mode: req.body.payment_mode,
    order_shipment_date: req.body.order_shipment_date,
    customerId: req.body.customerId,
    shipperId: req.body.shipperId
  };

  console.log("orderheaders",orderheaders);

  //save in the database
  OrderHeader.create(orderheaders)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("error", err);
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
    });
};

