import React from 'react'
import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="Nav">
                <Link className="link" to="/">
                    <div className="leftPart">
                        Shopicii
                    </div>
                </Link>
                <div className="rightPart">
                    <div className="selectCat">
                        <select name="cats" className='cats'>
                            <option value="">All categories</option>
                            <option value="dog">LAPTOPS</option>
                            <option value="cat">GAMING LAPTOPS</option>
                            <option value="hamster">MONITORS</option>
                            <option value="parrot">STORAGE</option>
                            <option value="spider">CPU</option>
                            <option value="goldfish">GRAPHIC CARDS</option>
                        </select>
                    </div>
                    <input className="Srch" placeholder="Search For Product" type="search" name="" id="" />
                    <Link className="link" to="/cart">
                        < ShoppingCartOutlinedIcon style={{ "fontSize": "40", "margin-left": "0.5rem" }} />
                    </Link>
                </div>
            </div>
        </>
    )
}
