const address = require("../controller/address.controller");
const carton=require("../controller/carton.controller");
const customer = require("../controller/customer.controller");
const shipper = require("../controller/shipper.controller");
const order_header= require("../controller/order_header.controller");
const product_class=require("../controller/productclass.controller")
const product=require("../controller/product.controller");
const order_items=require("../controller/orderitems.controller");

var router = require("express").Router();

router.post("/address", address.create);
router.get("/address", address.findAll);
router.post("/carton",carton.create);
router.post("/customer", customer.create);
router.get("/customer", customer.findAll);
router.post("/shipper",shipper.find)
router.post("/orderheader",order_header.create);
router.post("/productclass", product_class.create)
router.post("/product", product.create)
router.post("/orderitems",order_items.create)

module.exports = router;
