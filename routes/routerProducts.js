const express = require('express')
const router = express.Router()
const path = require('path')


router
    .route("/products")
    .get((req,res) => res.render('products'));



module.exports = router