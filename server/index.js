const express = require('express');
const cors = require('cors');
const Users = require('./models/User');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.use('/', require('./router/usersRoute'));

/* app.get('/users', async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).json(users);
}); */

/* app.post('/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  const users = await Users.createNewUser({ name, email, password });
  res.status(200).json(users);
}); */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));