const express = require("express");
const { db } = require("../modals/Users");
const router = express.Router();
const Users = require("../modals/Users");
const bcrypt = require("bcrypt")
const usersControllers = require('../controllers/userControllers')

router.post("/register",usersControllers.register);
router.post("/login", usersControllers.login);
router.get('/users', usersControllers.getUsers)
router.get('/user/:id', usersControllers.getUserDetails)
router.delete('/user', usersControllers.deleteUser)

module.exports = router;