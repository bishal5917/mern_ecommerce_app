import React,{useState} from 'react'
import './sign.css'
import axios from 'axios'

export default function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [sa,setSa]=useState("")
    const [phone,setPhone]=useState("")
  
    const registerUser=async()=>{
        try {
            await axios.post('/users/register',{
                name,
                email,
                password,
                shipAdd:sa,
                phone
            })
            setEmail("")
            setPassword("")
            setName("")
            setSa("")
            setPhone("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="signupcontainer">
                <div className="topic">
                    User Registration
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Name</span>
                        <input value={name} onChange={e=>setName(e.target.value)}
                        type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Email</span>
                        <input value={email} onChange={e=>setEmail(e.target.value)}
                        type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Phone</span>
                        <input value={phone} onChange={e=>setPhone(e.target.value)}
                        type="number" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Shipping Address</span>
                        <input value={sa} onChange={e=>setSa(e.target.value)}
                        type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Password</span>
                        <input value={password} onChange={e=>setPassword(e.target.value)}
                        type="password" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <button className="formBtn" onClick={registerUser}>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
