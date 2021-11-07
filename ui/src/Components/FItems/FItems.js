import React from 'react'
import './fitems.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'

export default function FItems() {
    return (
        <>
            <div className="productContainer">
                <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                <Link className="link" to="/product/:pId">
                <p className="title">
                Acer Nitro 5 2021 (AN515-45) Gaming Laptop / Ryzen 5 5600H / RTX 3060 / 8GB RAM / 512GB SSD / 15.6" FHD 144Hz Display
                </p>
                </Link>
                <span className="price">
                    $ 1,000
                </span>
                <button className='cartBtn'>
                    <ShoppingCartOutlinedIcon style={{color:"white"}}/>
                    <span>ADD TO CART</span>
                </button>
          
            </div>

        </>
    )
}
