const db = require("../models");
const Carton = db.carton;
const Op = db.Sequelize.Op;

//create and save new address
exports.create = (req, res) => {
  // Validate request
  if (!req.body.length) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  } 
 else if(!req.body.width) {
   res.status(400).send({
     message: "Content cannot be empty!",
   });
   return;
 }
else if(!req.body.height) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  //create carton row
  const carton = {
    length:req.body.length,
    width:req.body.width,
    height:req.body.height
  };

  //save in the database
  Carton.create(carton)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message || "ERROR WHILE CREATING CARTON" });
    });
};
