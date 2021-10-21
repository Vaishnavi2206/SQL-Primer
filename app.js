const express = require("express");
const app = express();
const routes = require("./routes/routes");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api/orders", routes);

// set port, listen for requests
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
