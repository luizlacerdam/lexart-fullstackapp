const cors = require('cors');
const express = require('express');
const { userRouter } = require('../routers');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/test', (req, res) => { res.send('Hello World!'); });
app.use('/user', userRouter);

module.exports = app;