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
  try {
    const { email, password } = req.body;
    const token = await UsersService.login({ email, password });
    res.status(200).json({ token });
  } catch (error) {
    res.status(error.code).json(error.message);
  }
};



module.exports = { createUser, getAllUsers, login };