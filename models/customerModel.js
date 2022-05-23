const mongoose = require('mongoose');

const customerScheme = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Customer', customerScheme);