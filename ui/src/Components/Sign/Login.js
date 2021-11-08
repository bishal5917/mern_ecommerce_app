import React,{useState} from 'react'
import './sign.css'
import { loginUser } from '../../Redux/ApiCalls'
import {useDispatch} from 'react-redux'

export default function Login() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const dispatch = useDispatch()

    const loginHandler=()=>{
       loginUser(dispatch,{name,password})
       setName("")
       setPassword("")
    }
    return (
        <>
        <div className="signupcontainer">
            <div className="topic">
                User Login
            </div>
            <div className="inputsCont">
                <div className="nameCont">
                    <span className="names">Name</span>
                    <input value={name} onChange={e=>setName(e.target.value)}
                    type="text" name="" id="" />
                </div>
                <div className="nameCont">
                    <span className="names">Password</span>
                    <input value={password} onChange={e=>setPassword(e.target.value)}
                    type="password" name="" id="" />
                </div>
                {/* <div className="fCont">
                    <span className="names">Forgot Password?</span>
                </div> */}
                <div className="nameCont">
                    <button onClick={loginHandler}
                    className="formBtn" >Login</button>
                </div>
            </div>
        </div>
    </>
    )
}
