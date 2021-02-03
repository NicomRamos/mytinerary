const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    urlPic: String,
    password: String,
    pais: String
})

const User = mongoose.model('user', userSchema)

module.exports = User