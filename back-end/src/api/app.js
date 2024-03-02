const cors = require('cors');
const express = require('express');
const { userRouter } = require('../routers');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/test', (req, res) => { res.send('Hello World!'); });
app.use('/user', userRouter);

app.use(errorMiddleware);

module.exports = app;