const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors");
const app = express()
require("dotenv").config()

//middlewares
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: true
}));
app.use(express.json())
app.disable('x-powered-by')
//routes
const chat = require('./Routes/ChatRoute')
//routes middlewares
app.use('/api/v1', chat)
module.exports = app