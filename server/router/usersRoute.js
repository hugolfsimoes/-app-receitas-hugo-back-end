const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/', async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).json(users);
});

router.post('/register/', async (req, res) => {
  const { name, email, password } = req.body;
  const users = await Users.createNewUser({ name, email, password });
  res.status(200).json(users);
});

module.exports = router;