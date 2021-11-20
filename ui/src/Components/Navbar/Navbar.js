import React, { useState } from 'react'
import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search/Search'
import axios from 'axios'

export default function Navbar() {

    const [search, setSearch] = useState("")
    const [searchstart, setSearchstart] = useState(false)
    const [data, setData] = useState([])

    //searching 
    const searchingItems = async () => {
        setSearchstart(true)
        const response = await axios.get(`/products/search?name=${search}`)
        setData(response.data)
    }

    const cartTotal = useSelector(state => state.cart.cartItems.length)

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
                        <input onKeyPress={(e) => e.key === 'Enter' && searchingItems()}
                            onChange={e => setSearch(e.target.value)}
                            className="Srch" placeholder="Search For Product" type="search" name="" id="" />
                        <SearchIcon onClick={searchingItems}
                            style={{ "fontSize": "40" }} className='iconSrch' />
                    </div>
                </div>
                <div className="cartContainer">
                    <Link className="link" to="/cart">
                        < ShoppingCartOutlinedIcon className='iconCart' style={{ "fontSize": "40"}} />
                    </Link>
                    <span className="numsCont">{cartTotal}</span>
                </div>
            </div>
            {searchstart && <Search search={search} responses={data} />}
        </>
    )
}
