const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Test:test1234@cluster0.minhf.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(uri, {useNewUrlParser:true}, (err) => {
    if (!err) { console.log('Connected') }
    else { console.log('Not conne')}
})

const app = express();
