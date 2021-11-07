import React,{useState} from 'react'
import './SS.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SellerSign() {
    const [shopname,setShopname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const registerSeller=async()=>{
        try {
            await axios.post('/sellers/register',{
                name:shopname,
                email,
                password
            })
            setEmail(" ")
            setPassword("")
            setShopname(" ")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="signupcontainer">
                <div className="topic">
                    Grow your business with us
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Shop name</span>
                        <input value={shopname} onChange={e=>setShopname(e.target.value)}
                        type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Email</span>
                        <input value={email} onChange={e=>setEmail(e.target.value)}
                        type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Password</span>
                        <input value={password} onChange={e=>setPassword(e.target.value)}
                        type="password" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <button onClick={registerSeller}
                        className="formBtn" >Sign up</button>
                    </div>
                    <div className="LoginContainerr">
                    <div className="nameCont">
                        <span className="names">Already a Seller ? </span>
                    </div>
                    <div className="nameCont">
                        <Link className="link" to="/sellerlogin">
                        <button className="formBtn" >Login</button>
                        </Link>
                    </div>
                    </div>
          
                </div>
            </div>
        </>
    )
}
