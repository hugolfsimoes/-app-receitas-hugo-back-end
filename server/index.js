const express = require('express');
const cors = require('cors');
const Users = require('./models/userModel');
const userRoutes = require('./router/usersRoute');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.use('/auth', userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));