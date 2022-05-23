const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const axios = require('axios')
const {MongoClient} = require('mongodb')
const main = require("./routes/mainPage");
const customerController = require('./controller/controller')
require("./db/db");

app.use(express.static(
    'public'));
app.set('view engine', 'ejs');
app.use('/', main);
app.use(express.json);
app.use('/customer', customerController);


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
