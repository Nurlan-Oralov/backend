require('./config/db')

const main = require ('./routes/routerIndex')
const about = require ('./routes/routerAboutUs')
const product = require ('./routes/routerProducts')

const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");


app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use('/', main)
app.use('/home', about)
app.use('/about', product)


app.listen(3000, () =>
    console.log(`App listening at http://localhost:3000`)
);
