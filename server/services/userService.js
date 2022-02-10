const UsersModel = require('../models/userModel');
const crypto = require('crypto');

const getAllUsers = async () => {
  const users = await UsersModel.getAllUsers();
  return users;
};

const createNewUser = async ({ name, email, password }) => {
  const passwordHash = crypto.createHash('md5').update(password).digest('hex');
  const result = await UsersModel.createNewUser({ name, email, passwordHash });
  return result;
};

const login = async ({ email, password }) => {
  const result = await UsersModel.login({ name, email, passwordHash });
  return result;
};

module.exports = { getAllUsers, createNewUser, login };