const express=require("express")
var bodyParser = require('body-parser');
const helmet = require('helmet')
const morgan = require('morgan')
const  Mongoose = require("mongoose");

const app=express()

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

//cors policy
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

MONGO_URL = "mongodb://localhost:27017/shopak"

Mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongodb connected sucessfully")
}).catch((error)=>{
console.log(error)
})


//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


//import for routes
const userroute=require('./routes/users')
const sellerroute=require('./routes/sellers')
const productroute=require('./routes/products')
const cartroute=require('./routes/carts')
const orderroute=require('./routes/orders')
const reviewroute=require('./routes/reviews')


//routes for router
app.use('/api/users', userroute)
app.use('/api/sellers', sellerroute)
app.use('/api/products', productroute)
app.use('/api/carts', cartroute)
app.use('/api/orders', orderroute)
app.use('/api/reviews', reviewroute)


app.listen('5000',()=>{
    console.log("Backend is Running")
})