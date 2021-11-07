const router = require('express').Router()
const Seller=require('../models/Seller')
const bcrypt=require('bcryptjs')

//Register api
router.post('/register', async (req, res) => {
    try {
        //hasing the password to keep safe from hackers
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newSeller = new Seller({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        const savedSeller = await newSeller.save();
        res.status(200).json(savedSeller)
    } catch (err) {
        res.status(500).send(err)
    }
})

//login api
router.post('/login',async (req,res)=>{
    try {
        //we will find user with the username and the password
        const seller=await Seller.findOne({name:req.body.name})
        !seller && res.status(404).send(" not found")

        //using bcrpt to compare as we have hashed the passw
        const validatedpssw=await bcrypt.compare(req.body.password,seller.password)
        !validatedpssw && res.status(400).send("Wrong Password")
        // const {password,...others}=user
        const {password,...others}=seller._doc  //coz we only want docs
        res.status(200).json(others)

    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router