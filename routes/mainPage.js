const express = require('express');
const router = express.Router();

router
    .route("/home")
    .get((req, res) => {res.render('home'
    )});
router
    .route("/about")
    .get((req, res) => {res.render('about',
        {data: {title: ['Кошелек Мужской', 'Кошелек Женский']}}
    )})

module.exports = router