import React from 'react'
import './fitems.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

export default function FItems({ prods }) {
    return (
        <>
            <div className="productContainer">
                <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                <Link className="link" to={`/product/${prods._id}`}>
                    <p className="title">
                        {prods.name}
                    </p>
                </Link>
                <span className="price">
                    {prods.price}
                </span>
                <button className='cartBtn'>
                    <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                    <span>ADD TO CART</span>
                </button>

            </div>

        </>
    )
}
