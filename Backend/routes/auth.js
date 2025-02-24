const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.post('/login',async (req, res) => { 
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
        
    }
  
    bcrypt.compare(password, user.password, (err, result) => {
      if(result) {
        const token = jwt.sign({ email: user.email }, 'secret');
        res.cookie('token', token);
        return res.json({ message: 'Login successful', user,token  });
       
      } 
      else {
        return res.status(401).json({ message: 'Invalid Password' });
       
        
      }
      
    });
});

router.post('/signup', async (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body
    let user = await userModel.findOne({ email})
    
    if(user)return res.status(400).send({message:'User Already Registered'})
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(password, salt, async(err ,hash)=>{
                let user = await userModel.create({
                    username,
                    email,
                    password: hash,
                })                
                let token = jwt.sign({email},"secret")
                res.cookie('token', token)
                res.status(200).send({message:'User Registered',token})
                console.log("user registered",user)

            })
        })
})



router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.status(200).send({message:"User logged out Successfully"})
})



module.exports = router;

