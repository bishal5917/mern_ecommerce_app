import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

export default function Topbar() {

    return (
        <>
            <div className="topbarCont">
                <Link className="link" to="/sellersign">
                    <span className="contents">SELL ON SHOPICII</span>
                </Link>
                <span className="contents">CUSTOMER CARE</span>
                <Link className="link" to="/login">
                    <span className="contents">LOGIN</span>
                </Link>
                <Link className="link" to="/signup">
                    <span className="contents">SIGNUP</span>
                </Link>
            </div>
        </>

    )
}
