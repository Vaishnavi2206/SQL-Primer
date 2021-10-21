const db = require("../models");
const ProductClass = db.product_class;
const Product = db.product

exports.create = (req, res) => {
  const product_class = {
    product_class_code: req.body.product_class_code,
    product_class_desc: req.body.product_class_desc,
  };

 

  ProductClass.create(product_class)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
    });
  const productClass = ProductClass.create(product_class).catch((err) => {
    res
      .status(401)
      .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
  });

  //  const product = {
  //    product_desc: "dfdfgdfgdf",
  //    product_price: 340,
  //    product_quantity_avail: 5,
  //    length: 10,
  //    width: 10,
  //    height: 10,
  //    weight: 100,
  //    product_class_code: productClass.product_class_code,
  //  };

  // Product.create(product)
  //   .then((data) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     res
  //       .status(401)
  //       .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
  //   });
};
