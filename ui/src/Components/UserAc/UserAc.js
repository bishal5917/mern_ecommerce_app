import React, { useState,useEffect } from 'react';
import './UserAc.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Orders from '../Orders/Orders';
import Chart from '../Chart/Chart'

const Userac = () => {

        const user = useSelector(state => state.user.curruser)

    //states 
    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)
    const [phone, setPhone] = useState(user && user.phone)
    const [sa, setSa] = useState(user && user.shipAdd)
    const [pass, setPass] = useState(user && user.pass)
    //handling edit
    const handleEditUserInfo = async () => {
        try {
            axios.put(`/users/updateuser/${user._id}`, {
                name,
                email,
                phone,
                sa,
                pass
            }, {
                headers: {
                    'token': `Bearer ${user.token}`
                }
            }
            )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="MainProfileEditContainer">
                <span className="title">Manage My Account</span>
                <div className="firstRow">
                    <div className="secondpartedit">
                        <span className="infotoedit">Name</span>
                        <input value={name} onChange={e => setName(e.target.value)}
                            type="text" name="" className="textedit" />
                    </div>
                    <div className="secondpartedit">
                        <span className="infotoedit">Email</span>
                        <input value={email} onChange={e => setEmail(e.target.value)}
                            type="text" name="" className="textedit" />
                    </div>
                    <div className="secondpartedit">
                        <span className="infotoedit">Phone Number</span>
                        <input value={phone} onChange={e => setPhone(e.target.value)}
                            type="text" name="" className="textedit" />
                    </div>
                </div>
                <div className="secRow">
                    <div className="secondpartedit">
                        <span className="infotoedit">Shipping Address</span>
                        <input value={sa} onChange={e => setSa(e.target.value)}
                            type="text" name="" className="textedit" />
                    </div>
                    <div className="secondpartedit">
                        <span className="infotoedit">Password</span>
                        <input value={pass} onChange={e => setPass(e.target.value)}
                            type="text" name="" className="textedit" />
                    </div>
                </div>
                <div className="buttonCont">
                    <button onClick={handleEditUserInfo}
                        className="btnUserEdit">
                        Save Changes
                    </button>
                </div>
                <Chart />
            </div>
              <Orders/>
        
        </>
    );
}

export default Userac;
