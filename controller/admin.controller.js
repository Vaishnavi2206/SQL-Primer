const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;
const { body, validationResult, check } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//create and save new address
exports.create = (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //hash password
  const salt = bcrypt.genSaltSync(10);
  const hashpassword = bcrypt.hashSync(req.body.password, salt);

  console.log("hash:", hashpassword);

  //create new customer
  const admin = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: hashpassword,
  };

  //save in the database
  Admin.create(admin)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING ADMIN" });
    });
};

exports.login = async (req, res) => {
  const user = await Admin.findOne({
    where: { username: req.body.username },
  });
  if (!user) {
    return res.status(400).send({ message: "Invalid username" });
  }
  const validPass = bcrypt.compareSync(req.body.password, user.password);

  if (!validPass) {
    return res.status(400).send({ message: "Invalid login credentials" });
  }
  //create and assign a token
  const token = jwt.sign({ _id: user.id }, process.env.ADMIN_TOKEN_SECRET);
  res.header("auth-token", token).send(token);

};