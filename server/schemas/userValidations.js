const crypto = require('crypto');
const UsersModel = require('../models/userModel');


const loginValidation = async (email, password) => {
  const { rows } = await UsersModel.getUserByEmail(email);
  if (!rows) {
    const error = new Error('User not found');
    error.code = 401;
    throw error;
  }
  const passwordHash = crypto.createHash('md5').update(password).digest('hex');
  if (rows[0].password !== passwordHash) {
    const error = new Error('Incorrect username or password');
    error.code = 401;
    throw error;
  }
  return passwordHash;
};

module.exports = { loginValidation };