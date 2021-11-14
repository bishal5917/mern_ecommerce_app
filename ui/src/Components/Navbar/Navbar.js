import React, { useState } from 'react'
import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {

    const quantity = useSelector(state => state.cart.quantity)

    const [search, setSearch] = useState("")

    return (
        <>
            <div className="Nav">
                <Link className="link" to="/">
                    <div className="leftPart">
                        Shopicii
                    </div>
                </Link>
                <div className="rightPart">
                    <div className="searchContainer">
                        <input onChange={e => setSearch(e.target.value)}
                            className="Srch" placeholder="Search For Product" type="search" name="" id="" />
                        <SearchIcon style={{ "fontSize": "40" }} className='iconSrch' />
                    </div>
                </div>
                <div className="cartContainer">
                        <Link className="link" to="/cart">
                            < ShoppingCartOutlinedIcon style={{ "fontSize": "40"}} />
                        </Link>
                        <span className="numsCont">{quantity}</span>
                    </div>
            </div>
        </>
    )
}
