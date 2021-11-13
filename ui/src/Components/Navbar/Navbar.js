import React, { useState } from 'react'
import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {

    const quantity = useSelector(state => state.cart.quantity)

    const [search, setSearch] = useState("")

    const setSearchHandler = () => {

    }

    return (
        <>
            <div className="Nav">
                <Link className="link" to="/">
                    <div className="leftPart">
                        Shopicii
                    </div>
                </Link>
                <div className="rightPart">
                    <input onChange={e => setSearch(e.target.value)}
                        className="Srch" placeholder="Search For Product" type="search" name="" id="" />
                    <button className='btn'>Search</button>
                    <div className="cartContainer">
                        <Link className="link" to="/cart">
                            < ShoppingCartOutlinedIcon style={{ "fontSize": "40", "margin-left": "0.5rem" }} />
                        </Link>
                        <span className="numsCont">{quantity}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
