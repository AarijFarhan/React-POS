

const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const User = require('../models/user')



router.post('/', async (req, res) => {
    
    const { username, phoneNumber, email, message } = req.body;
    let contact = await Contact.create({
        username,
        phoneNumber,
        email,
        message,

    })
    res.status(201).json({ message: "Thanks for Contacting Us" })
    
    console.log("user registered", contact )



})

module.exports = router;

