const router = require('express').Router()
const Cart=require('../models/Cart')
const { verifyToken } = require('./TokenVerify')

//create carts
router.post('/create',verifyToken,async(req,res)=>{
    try {
        const newCart=new Cart(req.body)
        const savedCart=await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get carts
router.get('/getcarts/:id',async(req,res)=>{
    try {
        const gotCarts=await Cart.findOne({userId:req.params.id})
        res.status(200).json(gotCarts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete cart
router.delete('/deletecart/:id',async(req,res)=>{
    try {
        const foundCart=await Cart.findById(req.params.id)
        if (req.body.userId===foundCart.userId){
            try {
                await Cart.findByIdAndDelete(req.params.id)
                res.status(200).json("cart deleted")
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else{
            res.status(401).json("Unauthorized")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//update cart
router.put('/updatecart/:id',async(req,res)=>{
    try {
        const foundCart=await Cart.findById(req.params.id)
        if (req.body.userId===foundCart.userId){
            try {
                const updatedCart=await Cart.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                res.status(200).json(updatedCart)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else{
            res.status(401).json("Unauthorized")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports=router