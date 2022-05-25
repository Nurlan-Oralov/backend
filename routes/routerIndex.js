const express = require('express')
const router = express.Router()
const path = require('path')


router
    .route("/")
    .get( (req,res) => res.render(path.resolve('view/index.ejs'), {
        title: 'index',
        activePage: 'index'
    }));

module.exports = router