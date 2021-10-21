const db = require("../models");
const Address = db.address;
const Op = db.Sequelize.Op;

//create and save new address
exports.create = (req, res) => {
  // Validate request
  if (!req.body.address_line_1) {
    res.status(400).send({
      message: "Address cannot be empty!",
    });
    return;
  } else if (!req.body.address_line_2) {
    res.status(400).send({
      message: "Address cannot be empty!",
    });
    return;
  }

  //create address row
  const address = {
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    country: req.body.country,
    landmark:req.body.landmark,
    street: req.body.street
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
