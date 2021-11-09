const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        default:""
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        default:0
    },
    shipAdd: {
        type: String,
        default:"Gairapatan Gandaki Province - Pokhara - Chipledhunga Area"
    },
}, { timestamps: true }  //timestamps will  be given on creation and updation automatically
);

module.exports=mongoose.model('User',UserSchema) 
//model name is user