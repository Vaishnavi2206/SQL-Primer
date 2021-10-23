const db = require("../models");
const Shipper = db.shipper;

exports.create =(req, res) => {
  const errHandler = (err) => {
    console.log("Error:", err);
  };

  const shipper = {
    shipper_name: req.body.shipper_name,
    shipper_phone: req.body.shipper_phone,
    shipper_address:req.body.shipper_address
  };

  Shipper.create(shipper)
    .then((data) => {
           res.status(200).send(data);
    })
    .catch(errHandler);
};
