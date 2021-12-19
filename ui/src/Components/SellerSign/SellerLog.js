import React, { useState } from 'react'
import './SS.css'
import { loginSeller } from '../../Redux/ApiCalls'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function SellerLog() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLoginSeller = () => {
        try {
            loginSeller(dispatch, { name, password })
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="signupcontainer">
                <div className="topic">
                    Seller Login
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Email</span>
                        <input onChange={e => setName(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Password</span>
                        <input onChange={e => setPassword(e.target.value)}
                            type="password" name="" id="" />
                    </div>
                    {/* <div className="fCont">
                    <span className="names">Forgot Password?</span>
                </div> */}
                    <div className="nameCont">

                        <button onClick={handleLoginSeller}
                            className="formBtn" >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
