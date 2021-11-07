import React from 'react'

import './SS.css'

export default function SellerLog() {
    return (
        <>
            <div className="signupcontainer">
                <div className="topic">
                    Seller Login
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Email</span>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Password</span>
                        <input type="password" name="" id="" />
                    </div>
                    {/* <div className="fCont">
                    <span className="names">Forgot Password?</span>
                </div> */}
                    <div className="nameCont">

                        <button className="formBtn" >
                                Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
