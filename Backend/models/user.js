// Connect to MongoDB
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/POS-Project')

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String,
})

module.exports = mongoose.model('User', userSchema)
