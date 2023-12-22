const User = require("./../model/UserModel");

const getPostUser = async (req, res) => {
  let findUser = await User.findOne({ id: req.body.id });
  if (findUser) {
    res.send("bu idli element varr");
  } else {
    const NewUser = new User(req.body);
    NewUser.save();
  }
};
const getUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};
const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  let _id = findUser._id;
  let deleteUser = await User.findByIdAndDelete(_id);
};
const getByIdUser = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  res.send(findUser);
};
const getUpdateUser = async (req, res) => {
  let id = req.params.id;
  let UpdateUser = await User.findOneAndUpdate({ id: id }, req.body);
};
const getPutUser = async (req, res) => {
  let id = req.params.id;
  let UpdateUser = await User.replaceOne({ id: id }, req.body);
};
module.exports = {
  getUser,
  getPostUser,
  getDeleteUser,
  getByIdUser,
  getUpdateUser,
  getPutUser,
};
