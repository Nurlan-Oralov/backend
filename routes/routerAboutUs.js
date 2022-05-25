const express = require('express')
const router = express.Router()
const path = require('path')


router
    .route("/about")
    .get((req,res) => res.render('home'));

module.exports = router