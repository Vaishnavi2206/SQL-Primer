const db = require("../models");
const Product = db.product;

//create and save new address
exports.create = (req, res) => {

  const product = {
    product_desc: req.body.product_desc,
    product_price: req.body.product_price,
    product_quantity_avail: req.body.product_quantity_avail,
    length: req.body.length,
    width: req.body.width,
    height: req.body.height,
    weight: req.body.weight,
    product_class_code: req.body.product_class_code,
  };

  //save in the database
  Product.create(product)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING PRODUCT" });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE FETCHING PRODUCT" });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      res.send({
        message: "PRODUCT was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating PRODUCT with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("id: " + id);

  Product.destroy({
    where: { id: id },
  })
    .then(() => {
      res.send({
        message: "PRODUCT was deleted successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting PRODUCT with id=" + id,
      });
    });
};

exports.partialUpdate = (req, res) => {
  const id = req.params.id;

  Product.update(
    {
      length: req.body.length,
    },
    { where: { id: id } }
  )
    .then((num) => {
      res.send({
        message: "PRODUCT was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating PRODUCT with id=" + id,
      });
    });
};