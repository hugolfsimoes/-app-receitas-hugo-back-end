const express = require('express');
const cors = require('cors');
const userRoutes = require('./router/usersRoute');
const error = require('./middlewares/error');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.use(error);
app.use('/auth', userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));