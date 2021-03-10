require('dotenv').config();
const express = require('express');
const userController = require('./controller/userController');
const postController = require('./controller/postController');

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(`/api/v1/users`,userController)
app.use(`/api/v1/users`,userController)


app.listen(port, () => console.log('Server is running'))