const db = require("../models");
const Address = db.address;
const Op = db.Sequelize.Op;
const {validationResult} = require("express-validator");

//create and save new address
exports.create = (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //create address row
  const address = {
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    country: req.body.country,
    landmark: req.body.landmark,
    street: req.body.street,
  };

  //save in the database
  Address.create(address)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADDRESS" });
    });
};

exports.findAll = (req, res) => {
  const city = req.query.city;
  var condition = city ? { city: { [Op.like]: `%${city}%` } } : null;

  Address.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
