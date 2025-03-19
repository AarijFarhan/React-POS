const express = require('express')
const path = require('path')
const auth = require('./routes/auth')
const port = 5000;
const cors = require("cors");

const Contact = require('./routes/contact');

const connectDB = require("./db/db");
// const contact = require('./models/contact');

const app = express()

app.use(cors());

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));




app.use('', auth)
app.use('/contact',Contact)




app.listen(port , (req, res) => {
    console.log(`Server is running on port ${port} `);
})