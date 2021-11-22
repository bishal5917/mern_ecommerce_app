import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logoutUser } from '../../Redux/ReduxUser'
import { useDispatch } from 'react-redux'
import { emptyTheCart } from '../../Redux/Actions/cartActions'
import './topbar.css'

export default function Topbar() {
    //taking a user
    const user = useSelector(state => state.user.curruser)

    const dispatch = useDispatch()

    const logoutHandle = () => {
        dispatch(logoutUser())
        dispatch(emptyTheCart())
    }
    return (
        <>
            <div className="topbarCont">
                {!user && (<Link className="link" to="/sellersign">
                    <span className="contents">SELL ON SHOPICII</span>
                </Link>)}

                <span className="contents">CUSTOMER CARE</span>

                {user && (<Link className="link" to={user && `/orders/${user._id}`}>
                    <span className="contents">MY ORDERS</span>
                </Link>)}
                {!user ? (<Link className="link" to="/signup">
                    <span className="contents">SIGNUP</span>
                </Link>) : (<Link className="link" to={user && `/user/` + user._id}>
                    <span className="contents">MANAGE ACCOUNT</span>
                </Link>)}
                {user ? (<span onClick={logoutHandle} className="contents">LOGOUT</span>) : (<Link className="link" to="/login">
                    <span className="contents">LOGIN</span>
                </Link>)}
            </div>
        </>

    )
}
