const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;

// addressId=db.address.findAll({where:{id:2}})
// console.log("addressId: ", addressId)

//create and save new address
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstname) {
    res.status(400).send({
      message: "Fname cannot be empty!",
    });
    return;
  } else if (!req.body.lastname) {
    res.status(400).send({
      message: "Lname cannot be empty!",
    });
    return;
  }

  //create address row
  const customer = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    gender: req.body.gender,
    addressId:req.body.addressId
  };

  //save in the database
  Customer.create(customer)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING CUSTOMER" });
    });
};

exports.findAll = (req, res) => {
  const firstname = req.query.city;
  var condition = firstname
    ? { firstname: { [Op.like]: `%${firstname}%` } }
    : null;

  Customer.findAll({ where: condition })
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
