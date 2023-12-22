const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
  name: String,
  id: String,
  surname: String,
  age: Number,
});

module.exports = mongoose.model("User", Userschema);
