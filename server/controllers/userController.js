const UsersService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = await UsersService.getAllUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const users = await UsersService.createNewUser({ name, email, password });
  res.status(200).json(users);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const users = await UsersService.login({ email, password });
  res.status(200).json(users);
};



module.exports = { createUser, getAllUsers, login };