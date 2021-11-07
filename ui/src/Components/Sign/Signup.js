import React from 'react'
import './sign.css'

export default function Signup() {
    return (
        <>
            <div className="signupcontainer">
                <div className="topic">
                    User Registration
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Name</span>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Email</span>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Password</span>
                        <input type="password" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <button className="formBtn" >Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
