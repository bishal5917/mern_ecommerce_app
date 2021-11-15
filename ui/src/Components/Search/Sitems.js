import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { addProduct } from '../../Redux/ReduxCart'
import  {useDispatch}  from 'react-redux'

export default function FItems({ searched }) {

        //add to cart 
        const dispatch = useDispatch();
        const addToCartHandler = () => {
            dispatch(addProduct({...searched}));
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
                    {searched.price}
                </span>
                <button onClick={addToCartHandler} className='cartBtn'>
                    <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                    <span>ADD TO CART</span>
                </button>

            </div>

        </>
    )
}
