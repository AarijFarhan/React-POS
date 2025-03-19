// Connect to MongoDB
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/POS-Project')

let contactSchema = new mongoose.Schema({
    username: String,
    phoneNumber: Number,
    email:String,
    message:String,
})

module.exports = mongoose.model('Contact', contactSchema)
