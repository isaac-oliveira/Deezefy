const express = require("express");

const LoginController = require("./app/controller/LoginController");
const UserController = require("./app/controller/UserController");

const authenticate = require("./app/middlewares/autenticate");

const Router = express.Router();

Router.post("/login", LoginController.store);
Router.post("/register", UserController.store);

module.exports = Router;
