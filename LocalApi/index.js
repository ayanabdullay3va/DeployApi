const express = require("express");
let bodyParser = require("body-parser");
require("dotenv").config();
require("./src/config/db");
const routes = require("./src/router/UserRouter"); // new
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.use(bodyParser.json());

app.use("/", routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
