const express = require("express");

const userControllers = require("./../controllers/userControllers");

const Router = express.Router();

Router.route("/")
  .post(userControllers.addUser)
  .get(userControllers.getAllUsers);
Router.route("/:id")
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser)
  .get(userControllers.getUser);

Router.route("/login").post(userControllers.userLogin);

module.exports = Router;
