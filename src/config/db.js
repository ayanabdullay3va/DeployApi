const mongoose = require("mongoose");

// main().catch(err => console.log(err));

// async function main() {

// }
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Fail" + err);
  });
