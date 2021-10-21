const db = require("../models");
const Product = db.product;

//create and save new address
exports.create = (req, res) => {
  const product =
    // product_desc: req.body.product_desc,
    // product_price: req.body.product_price,
    // product_quantity_avail: req.body.product_quantity_avail,
    // length: req.body.length,
    // width: req.body.width,
    // height: req.body.height,
    // weight: req.body.weight,
    // product_class_code: 200
    {
      product_desc: "yyyy",
      product_price: 340,
      product_quantity_avail: 5,
      length: 10,
      width: 10,
      height: 10,
      weight: 100,
      product_class_code: 200
    };
  

 

  //save in the database
  Product.create(product)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
    });
};

