const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    sellerId:{type:String,required:true},
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:String,required:true},
    cpu:{type:String,default:" "},
    operatingSystem:{type:String,default:" "},
    display:{type:String,default:" "},
    ram:{type:String,default:" "},
    storage:{type:String,default:" "},
    graphics:{type:String,default:" "},
    battery:{type:String,default:" "},
    
}, { timestamps: true }
);

module.exports=mongoose.model('Product',ProductSchema) 
