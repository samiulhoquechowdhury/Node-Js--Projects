require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express();

//routes
const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/notFoundMiddleware')
const errorHandlerMiddleware = require('./middleware/')

const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listining on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();