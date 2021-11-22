import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from '../../Redux/Actions/cartActions'
import { useHistory } from 'react-router-dom'
import './ship.css'

export default function Shipping() {
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [code, setCode] = useState("")
    const [street, setStreet] = useState("")
    const [alert, setAlert] = useState(false)

    // const shippingAddressSave = useSelector(state => state.address.shippingAddress)
    const nameOfUser = useSelector(state => state.user.curruser.name)

    const addressObject = {
        name: nameOfUser,
        country,
        city,
        province,
        code,
        street
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const deliveryAddressHandler = () => {
        if (country && city && province && code && street) {
            dispatch(saveShippingAddress(addressObject))
            history.push('/order')
        }
        else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);

        }
    }

    return (
        <div>
            <div className="signupcontainer">
                <div className="topic">
                    Shipping Address
                </div>
                <div className="inputsCont">
                    <div className="nameCont">
                        <span className="names">Country</span>
                        <input value={country} onChange={e => setCountry(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Province</span>
                        <input value={province} onChange={e => setProvince(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">City</span>
                        <input value={city} onChange={e => setCity(e.target.value)}
                            type="text" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Postal/Zip Code</span>
                        <input value={code} onChange={e => setCode(e.target.value)}
                            type="number" name="" id="" />
                    </div>
                    <div className="nameCont">
                        <span className="names">Street Address</span>
                        <input value={street} onChange={e => setStreet(e.target.value)}
                            type="text" name="" id="" />
                    </div>

                    {
                        alert &&
                        <div className="nameCont">
                            <span className="showAlert">Please Fill all the details to proceed</span>
                        </div>
                    }

                    <div className="nameCont">
                        <button onClick={deliveryAddressHandler} className="formBtn">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
