const express = require('express')
const path = require('path')
const auth = require('./routes/auth')
const port = 5000;
const cors = require("cors");


const app = express()

app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('', auth)

app.listen(port , (req, res) => {
    console.log(`Server is running on port ${port} `);
})