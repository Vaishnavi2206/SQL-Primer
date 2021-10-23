const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;
const { body, validationResult, check } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")

// addressId=db.address.findAll({where:{id:2}})
// console.log("addressId: ", addressId)

//create and save new address
exports.create = (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //hash password
  const salt =bcrypt.genSaltSync(10);
  const hashpassword =bcrypt.hashSync(req.body.password, salt);

  console.log("hash:",hashpassword)

  //create new customer
  const customer = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    gender: req.body.gender,
    addressId: req.body.addressId,
    password: hashpassword,
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


exports.login=async (req, res)=>{
  const user=await Customer.findOne({where:{username:req.body.username}})
  if(!user){
    return res.status(400).send({ message: "Invalid username" });

  }
  const validPass=bcrypt.compareSync(req.body.password,user.password)

  if(!validPass){
    return res.status(400).send({message:"Invalid login credentials"})
  }
    //create and assign a token
    const token=jwt.sign({_id:user.id},process.env.TOKEN_SECRET)
    res.header('auth-token',token).send(token)


    // return res.status(200).send({ message: "Logged In" });

}