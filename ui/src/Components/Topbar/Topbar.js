import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {logoutUser} from '../../Redux/ReduxUser'
import {useDispatch} from 'react-redux'
import './topbar.css'

export default function Topbar() {
  //taking a user
  const user=useSelector(state=>state.user.curruser)

  const dispatch=useDispatch()

  const logoutHandle=()=>{
      dispatch(logoutUser())
  }
    return (
        <>
            <div className="topbarCont">
                {!user &&  (<Link className="link" to="/sellersign">
                    <span className="contents">SELL ON SHOPICII</span>
                </Link>)}
           
                <span className="contents">CUSTOMER CARE</span>
           {user?(<span onClick={logoutHandle} className="contents">LOGOUT</span>):(<Link className="link" to="/login">
                    <span className="contents">LOGIN</span>
                </Link>)}
                {!user?(<Link className="link" to="/signup">
                    <span className="contents">SIGNUP</span>
                </Link>):(<Link className="link" to={`/user/`+user._id}>
                    <span className="contents">MY ACCOUNT</span>
                </Link>)}
            </div>
        </>

    )
}
