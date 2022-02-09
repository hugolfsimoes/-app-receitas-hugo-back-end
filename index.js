const express = require('express');
const Users = require('./models/User');
const app = express();
const port = 3001;

app.get('/users', async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).json(users);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));