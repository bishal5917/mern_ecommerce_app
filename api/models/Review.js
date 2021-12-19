const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    rating: { type: Number, required: true },
    reviewerId: { type: String, required: true },
    reviewText: { type: String, required: true }

}, { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema) 
