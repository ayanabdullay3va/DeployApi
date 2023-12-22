const UserController = require("./../controller/UserController");
const express = require("express");

const router = express.Router();

router.get("/users", UserController.getUser);
router.post("/users", UserController.getPostUser);
router.get("/users/:id", UserController.getByIdUser);
router.delete("/users/:id", UserController.getDeleteUser);
router.put("/users/:id", UserController.getPutUser);
router.patch("/users/:id", UserController.getUpdateUser);

module.exports = router;
