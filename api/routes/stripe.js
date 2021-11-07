const router=require("express").Router()

STRIPE_KEY=sk_test_51Jt39II1eOnE6UkL1Rtg0ZQV56zWJYWyiqMkCJ9J4DM0PMT8PppQmLzToIv0dD5Qd50c0XRseWEG19CxfSd5FQsv00UEjzuiux


router.post('/payment',async(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd",
    },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr)
            }
            else{
                res.status(200).json(stripeRes)
            }
        }
    
    )
})