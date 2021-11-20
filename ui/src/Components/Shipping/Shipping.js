import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Shipping() {
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [code,setCode]=useState("")
    const [country,setCountry]=useState("")
    return (
        <div>
            <div className="signupcontainer">
                <div className="topic">
                    Shipping Address
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Address</span>
                        <input value={address} onChange={e => setAddress(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">City</span>
                        <input value={city} onChange={e => setCity(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Postal Code</span>
                        <input value={code} onChange={e => setCode(e.target.value)}
                            type="number" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Country</span>
                        <input value={country} onChange={e => setCountry(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <Link className='link' to='/order'>
                    <div className="nameCont">
                        <button className="formBtn">Proceed</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
