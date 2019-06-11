const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
email    : { type: String},
    hash     : { type: String},
    password : { type: String},
    Weather: {
        savedCities : [String]
    },
    createdDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);
