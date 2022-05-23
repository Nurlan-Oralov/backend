const express = require('express');
const router = express.Router()

router
    .route('/home')
    .get(async (req, res) => {
        const product = await productModel.find()
        res.rende(path.resolve('view/index.ejs')), {
            activePage: 'index',
            product: product,
        }
    })

module.exports = router
