const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken')
const { auth } = require('./TokenVerify')


//register user
router.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, "0010").toString()
    });
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)  //201=created
    } catch (error) {
        res.status(500).json(error)
    }
})

//login user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name })
        !user && res.status(404).json("Not Found")

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, "0010").toString(
            CryptoJS.enc.Utf8
        )
        decryptedPassword !== req.body.password && res.status(401).send("Wrong credentials")

        //JWT 
        const token = JWT.sign({
            id: user._id
        }, "faang")

        const { password, ...others } = user._doc
        res.status(200).json({ ...others, token })
    } catch (error) {
        res.status(500).json(error)
    }
})


//updateUser
router.put('/updateuser/:id', auth, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, "0010").toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {

    }
})


//get user
router.get('/getuser/:id', auth, async (req, res) => {
    try {
        const founduser = await User.findById(req.params.id)
        const {password,...others}=founduser._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get user statistics
router.get('/statistics/:id',auth,async (req,res)=>{
    const date=new Date();
    const previousYear=new Date(date.setFullYear(date.getFullYear()-1))
    try {
        const data=await User.aggregate([{
            $match:{
                createdAt:{$gte:previousYear}
            }
        },
        {
            $project:{
                month:{$month:"$createdAt"}
            },
        },{
            $group:{
                _id:"$month",
                total:{$sum:1},
            },
        },
        ]);
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router