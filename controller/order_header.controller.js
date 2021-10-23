const db = require("../models");
const OrderHeader = db.order_header;
const OrderItems = db.order_items
const Op = db.Sequelize.Op;
const {validationResult} = require("express-validator");

//create and save new address
exports.create = (req, res) => {

  //create order_header row
  const orderheaders = {
    // order_date: require("moment")(date).format("YYYY-MM-DD"),
    order_status: req.body.order_status,
    payment_mode: req.body.payment_mode,
    order_shipment_date: req.body.order_shipment_date,
    customerId: req.body.customerId,
    shipperId: req.body.shipperId,
  };

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

exports.findall = (req, res) => {
  OrderHeader.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE FETCHING ORDER HEADERS" });
    });
};

exports.findById=(req, res)=>{
  const id=req.params.id;
  OrderHeader.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE FETCHING ORDER HEADERS" });
    });
}

exports.update= (req, res) => {
  const id=req.params.id;

  OrderHeader.update(req.body, {
    where: { id: id },
  }).then((num) => {
        res.send({
          message: "Order was updated successfully.",
        });
      
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
}

exports.delete=(req, res)=>{
  const id = req.params.id;
  console.log("id: " + id);

    OrderHeader.destroy({
      where: { id: id },
    })
      .then(() => {
        res.send({
          message: "Order was deleted successfully.",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error deleting Order with id=" + id,
        });
      });

}

exports.partialUpdate=(req, res) => {
  const id = req.params.id;

  OrderHeader.update(
    {
      order_status: req.body.order_status,
    },
    { where: { id: id } }
  )
    .then((num) => {
      res.send({
        message: "Order was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
}

exports.findItems = (req, res) => {
  const id = req.params.id;
  OrderItems.findAll({where: {orderId: id}})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE FETCHING ORDER HEADERS" });
    });
};