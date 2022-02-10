const UsersModel = require('../models/userModel');
const UserValidations = require('../schemas/userValidations');
require('dotenv/config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '50m'
};

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
  const { passwordHash } = await UserValidations.loginValidation(email, password);
  const result = await UsersModel.login({ email, passwordHash });
  return result;
};

module.exports = { getAllUsers, createNewUser, login };