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
        const foundrevs = await Review.find({ productId: req.params.pid })
        res.status(200).send(foundrevs)
    } catch (error) {
        res.status(500).json(error)
    }
})


//delete a review
router.delete('/delete/:rid', async (req, res) => {
    const foundReview = await Review.findById(req.params.rid)
    const reviewer = foundReview.reviewerId
    if (req.body.userId === reviewer) {
        try {
            await Review.findByIdAndDelete(req.params.rid)
            res.status(200).json("Review deleted SuccessFully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You are Forbidden")
    }
})


//edit a review
router.put('/edit/:rid', async (req, res) => {
    const foundReview = await Review.findById(req.params.rid)
    const reviewer = foundReview.reviewerId
    if (req.body.userId === reviewer) {
        try {
            const updatedReview = await Review.findByIdAndUpdate(req.params.rid, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedReview)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You are Forbidden")
    }
})
module.exports = router