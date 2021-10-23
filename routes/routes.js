const address = require("../controller/address.controller");
const carton = require("../controller/carton.controller");
const customer = require("../controller/customer.controller");
const shipper = require("../controller/shipper.controller");
const order_header = require("../controller/order_header.controller");
const product_class = require("../controller/productclass.controller");
const product = require("../controller/product.controller");
const order_items = require("../controller/orderitems.controller");
const admin= require("../controller/admin.controller")
const { check } = require("express-validator");
const verifyUser=require("../middleware/authorize")
const verifyAdmin=require("../middleware/adminAuth")

var router = require("express").Router();

//REGISTER USER
router.post(
  "/register",
  [
    check(
      "firstname",
      "Firstname length should be 10 to 20 characters"
    ).isLength({
      max: 20,
    }),
    check("lastname", "Lastname length should be 10 to 20 characters").isLength(
      {
        max: 20,
      }
    ),
    check("email", "Incorrect Email").isEmail(),
    check("email", "Email length should be 10 to 30 characters").isLength({
      min: 10,
      max: 30,
    }),
    check("phone", "Mobile number should be numeric").isNumeric(),
    check("phone", "Mobile number should contains 10 digits").isLength({
      min: 10,
      max: 10,
    }),
    check("username", "Username length should be 7 to 10 characters").isLength(
      {
        min: 7,
        max: 10,
      }
    ),
  ],
  customer.create
);

router.post('/login',customer.login);
//REGISTER USER

//ADDRESS
router.post(
  "/address",
  [
    check("address_line_1", "Address line 1 cannot be empty").notEmpty(),
    check("address_line_2", "Address line 2 cannot be empty").notEmpty(),
    check("pincode", "pincode should be numeric").isNumeric(),
    check("pincode", "pincode should contains 10 digits").isLength({
      min: 6,
      max: 6,
    }),
  ],
  verifyUser,
  address.create
);
router.get("/address", address.findAll);
//ADDRESS

//CUSTOMERS
router.get("/customers", customer.findAll);
//CUSTOMERS

//ADMIN
router.post(
  "/admin/register",
  [
    check("username", "Username length should be 7 to 10 characters").isLength(
      {
        min: 7,
        max: 10,
      }
    ),
    check('password',"Password does not satisfy criteria").isStrongPassword()
  ],
  admin.create
);
router.post('/admin/login',admin.login)
//ADMIN



router.post("/cartons",verifyAdmin, carton.create);
router.post("/shippers", verifyAdmin, shipper.create);

//ORDER HEADERS
router.post("/orderheaders",verifyUser,order_header.create);
router.get("/orderheaders", order_header.findall);
router.get("/orderheaders/:id", order_header.findById);
router.put("/orderheaders/:id", order_header.update);
router.delete("/orderheaders/:id", order_header.delete);
router.patch("/orderheaders/:id", order_header.partialUpdate);
//ORDER HEADERS

//PRODUCT
router.post("/products",verifyAdmin, product.create);
router.get("/products/:id", product.findById);
router.put("/products/:id", product.update);
router.delete("/products/:id", product.delete);
router.patch("/products/:id", product.partialUpdate);
//PRODUCT

router.post("/productclass", verifyAdmin, product_class.create);

//ORDER ITEMS
router.get("/orderheaders/:id/orderitems",verifyUser,order_header.findItems);
router.post("/orderheaders/:id/orderitems",verifyUser, order_items.create);
//ORDER ITEMS

module.exports = router;
