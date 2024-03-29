const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    orderItems: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        id: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    shippingAddress: {
        name: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        code: { type: Number, required: true },
        street: { type: String, required: true }
    },
    deliveryCharge: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    isdelivered: { type: Boolean, default: false }

}, { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema) 
