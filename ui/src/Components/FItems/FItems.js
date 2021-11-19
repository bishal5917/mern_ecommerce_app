import React from 'react'
import './fitems.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import  {useDispatch}  from 'react-redux'
import { addToCart } from '../../Redux/Actions/cartActions';

export default function FItems({ prods }) {

        //add to cart 
        const dispatch = useDispatch();

        const addToCartHandle=()=>{
            const productId=prods._id
            const quantity=1
            dispatch(addToCart(productId,quantity))
        }

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
                    $ {prods.price}
                </span>
                <button onClick={addToCartHandle} className='cartBtn'>
                    <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                    <span >ADD TO CART</span>
                </button>
            </div>

        </>
    ) 
}
