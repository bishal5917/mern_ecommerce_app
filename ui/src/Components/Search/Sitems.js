import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import  {useDispatch}  from 'react-redux'
import { addToCart } from '../../Redux/Actions/cartActions';

export default function FItems({ searched }) {

        //add to cart 
        const dispatch = useDispatch();
        const addToCartFromSearch=()=>{
            const productId=searched._id
            const quantity=1
            dispatch(addToCart(productId,quantity))
        }

    return (
        <>
            <div className="productContainer">
                <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                <Link className="link" to={`/product/${searched._id}`}>
                    <p className="title">
                        {searched.name}
                    </p>
                </Link>
                <span className="price">
                    $ {searched.price}
                </span>
                <button className='cartBtn'>
                    <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                    <span onClick={addToCartFromSearch}>ADD TO CART</span>
                </button>

            </div>

        </>
    )
}
