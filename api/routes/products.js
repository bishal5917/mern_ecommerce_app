const router = require('express').Router()
const Product = require('../models/Product')

//create a product
router.post('/create', async (req, res) => {
    try {
        const newProd = new Product(req.body)
        const savedProd = await newProd.save()
        res.status(200).json(savedProd)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all products in a database
router.get('/getallprods', async (req, res) => {
    var categoryFound = req.query.category
    try {
        let gotProducts;
        if (categoryFound) {
            gotProducts = await Product.find({ category: categoryFound })
        }
        else {
            gotProducts = await Product.find()
        }
        res.status(200).json(gotProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all product of a seller
router.get('/getprods/:id', async (req, res) => {
    try {
        const gotProducts = await Product.find({ sellerId: req.params.id })
        res.status(200).send(gotProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//searching a product
router.get('/search', async (req, res) => {
    let searchTerm = req.query.name
    let eachTerm = searchTerm.split(" ")
    for (var i in eachTerm) {
        eachTermBySpace = eachTerm[i]
    }
    try {
        let searchFound = await Product.find({ name: { $regex: eachTermBySpace, $options: 'i' } })
        res.status(200).json(searchFound)
    } catch (error) {
        res.status(500).json(error)
    }
})
//get prodById
router.get('/:id', async (req, res) => {
    try {
        const gotProducts = await Product.findById(req.params.id)
        res.status(200).send(gotProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})
//edit a product
router.put('/updateprod/:id', async (req, res) => {
    try {
        const foundProd = await Product.findById(req.params.id)
        if (req.body.sellerId === foundProd.sellerId) {
            try {
                const updatedprod = await Product.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedprod)
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

//delete a product
router.delete('/deleteprod/:id', async (req, res) => {
    try {
        const foundProd = await Product.findById(req.params.id)
        if (req.body.sellerId === foundProd.sellerId) {
            try {
                await Product.findByIdAndDelete(req.params.id)
                res.status(200).json("product deleted")
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

module.exports = router