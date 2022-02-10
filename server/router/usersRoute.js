const express = require('express');
const rescue = require('express-rescue');
const usersRoute = express.Router();
const UserController = require('../controllers/userController');


usersRoute.get('/', rescue(UserController.getAllUsers));
usersRoute.post('/register', rescue(UserController.createUser));
usersRoute.post('/login', rescue(UserController.login));



module.exports = usersRoute;