const router = require('express').Router()
const Order = require('../models/Order')
const { verifyToken, auth } = require('./TokenVerify')

//create orders
router.post('/create', verifyToken, async (req, res) => {
    try {
        const newOrder = new Order(req.body)
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get orders
router.get('/getcarts/:id', async (req, res) => {
    try {
        const gotOrders = await Order.findOne({ userId: req.params.id })
        res.status(200).json(gotOrders)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete order
router.delete('/deleteorder/:id', async (req, res) => {
    try {
        const foundOrder = await Order.findById(req.params.id)
        if (req.body.userId === foundOrder.userId) {
            try {
                await Order.findByIdAndDelete(req.params.id)
                res.status(200).json("order deleted")
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).json("Unauthorized")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//update order
router.put('/updateorder/:id', async (req, res) => {
    try {
        const foundOrder = await Order.findById(req.params.id)
        if (req.body.userId === foundOrder.userId) {
            try {
                const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedOrder)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).json("Unauthorized")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//get monthly income
router.get('/income', auth, async (req, res) => {
    const date = new Date() //if its april
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1)) //mar
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)) //feb

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router