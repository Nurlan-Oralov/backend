require('./config/db')

const express = require("express");
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express)

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json);

app.use('/', require('./routes/routerIndex'))
app.use('/about', require('./routes/routerAboutUs'))
app.use('/products', require('./routes/routerProducts'))


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
