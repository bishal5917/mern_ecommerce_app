const router = require('express').Router()
const Review = require('../models/Review')

//create review
router.post('/createreview', async (req, res) => {
    try {
        const newRev = new Review(req.body)
        const savedRev = await newRev.save()
        res.status(200).json(savedRev)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get all reviews of a product
router.get('/getrvs/:pid', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = router