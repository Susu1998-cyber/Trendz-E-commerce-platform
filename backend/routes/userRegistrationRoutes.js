 

 const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const {User} = require('../models/user')

//user registration router
router.post('/register',async(req,res) => {

    const {email,password,userType,dob,firstname,age,lastname} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'Email already in use'})

        }
        //Hash the provided password and store it in the database
        const hashedInputPassword = crypto.createHash("sha256").update(password).digest('hex');
        const user = new User({email,hashedPassword: hashedInputPassword,userType,dob,firstname,age,lastname})
        await user.save()
        res.json({message:'Registration successful'})
    } catch(error){
        console.error('Registration error:',error)
        res.status(500).json({message:'Server error'})
    }
})
module.exports = router;